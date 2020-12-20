import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Account } from 'src/app/models/account';
import { AuthService } from 'src/app/shared/auth/auth.service';
import {DataService} from "../../shared/data/data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  connectForm: FormGroup;
  submitted = false;
  loader = false;

  account: Account = new Account();
  
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private dataService: DataService,
    private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.connectForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }, {

      }
    );
  }

  onSubmit() {
    this.submitted = true;
    this.loader = true;

    if (this.connectForm.invalid) { this.loader = false; return; }

    this.onLogin(this.connectForm.value);
  }

  onLogin(connectForm) {
    this.dataService.post('Accounts/login?include=user', {username: connectForm.username, password: connectForm.password })
      .then(
        (infoToken: any) => {
          this.account = infoToken.user;
          // création account on localStorage
          this.authService.setAccount(this.account);
          // création account on localStorage
          this.authService.setToken(infoToken.id);
          this.updateLastLogin(this.account.id);
          // redirect to ACCUEIL
          this.authService.redirect('accueil');
          this.showSuccess(`Bienvenue dans votre Espace de Travail`, 'Authentification');
          // get the account roles
          this.dataService.get('Accounts/' + this.authService.getCurrentAccount().id + '/roles')
            .then(
              (roles: any) => {
                // création roles on localstorage
                this.authService.setAccountRoles(roles);

                // compte désactivé
                if (!this.account.disabled) {
                  // get account User
                  if (this.account.utilisateurId) {
                    this.dataService.get('Utilisateurs/' + this.account.utilisateurId)
                      .then(
                        (utilisateur: any) => {
                          this.showSuccess(`Bienvenue ${utilisateur.prenom} ${utilisateur.nom} dans votre Espace de Travail`,
                            'Authentification');
                          this.authService.setAccountUtilisateur(utilisateur);
                          this.loader = false;
                          if (this.authService.accountHasRole(['ROLE_ADMIN', 'ROLE_SUPERVISEUR'])) {
                            // redirect to ACCUEIL
                            this.authService.redirect('accueil');
                          }
                          if (this.authService.accountHasRole(['ROLE_EXTERNE'])) {
                            // redirect to EXTERNE
                            this.authService.redirect('externe');
                          }
                          if (this.authService.accountHasRole(['ROLE_PDCF', 'ROLE_PPCF'])) {
                            // redirect to INTERNE
                            this.authService.redirect('interne');
                          }
                          if (this.authService.accountHasRole(['ROLE_TI'])) {
                            // redirect to TI
                            this.authService.redirect('ti');
                          }
                          if (this.authService.accountHasRole(['ROLE_SCQ'])) {
                            // redirect to TI
                            this.authService.redirect('control');
                          }
                        },
                        err => {
                          this.loader = false;
                          this.showError('Ce compte n\'existe pas', 'Authentification');
                        }
                      );
                  } else {
                    this.loader = false;
                    this.showError('Ce compte n\'existe pas', 'Authentification');
                  }

                } else {
                  this.loader = false;
                  this.showError('Ce compte a été désactivé', 'Authentification');
                }
              },
              err => {
                this.loader = false;
                console.log(err);
              }
            );
        },
        err => {
          this.showError('Identifiants incorrects. Veuillez réessayer', 'Authentification');
          this.loader = false;
        }
      );
  }

  updateLastLogin(id) {
    this.dataService.patch('Accounts', id, {lastLogin: new Date()})
      .then(
        data => {
          // console.log('Account : ', data);
        }
      );
  }

  showSuccess(message, title) {
    this.toastr.success(message, title, {
      timeOut: 3000,
      positionClass: 'toast-top-right'
    });
  }

  showError(message, title) {
    this.toastr.error(message, title, {
      timeOut: 3000,
      positionClass: 'toast-top-right'
    });
  }

  annuler() {
    this.connectForm.reset();
  }

}
