import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import {DataService} from '../../shared/data/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = 'Listes des Administrateurs';
  alladmins: Utilisateur[]= [];

  admin: Utilisateur = new Utilisateur();


  constructor(private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllAdmins();
    this.deleteAdmin(this.admin.id);
  }

  getAllAdmins(): void {
    this.dataService.get(`Utilisateurs`)
      .then(
        (res: any) => {
          console.log(res);
          this.alladmins = res;
        },
        err => {
          console.log(err);
        }
      );
  }


  deleteAdmin(adminId: string): void {
    this.dataService.delete('Utilisateurs', adminId)
    .then(
      (res: any) => {
        console.log('delete : ', res)
        this.showSuccess('Admin supprimé avec succés !', 'Suppression');
        this.getAllAdmins();
      
      },
      err => {
        console.log(err);
      }
    );
  }

  postAdmins(): void {
    this.dataService.post('Utilisateurs' , this.admin)
    .then(
      (res: any) => {
        console.log(res);
        this.admin = res;
        console.log('add : ', res)
        this.showSuccess('Admin ajouté avec succés !', 'Ajout');
        this.getAllAdmins();
      },
      err => {
        console.log(err);
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

}