import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import {DataService} from '../../../../../shared/data/data.service';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {Direction} from '../../../../../models/direction';

@Component({
  selector: 'app-modifier-admin',
  templateUrl: './modifier-admin.component.html',
  styleUrls: ['./modifier-admin.component.css']
})
export class ModifierAdminComponent implements OnInit {

  title = 'Modifier des administrateurs';
  alladmins: Utilisateur[]= [];
  allDirections: Direction[] = [];

  admin: Utilisateur = new Utilisateur();


  constructor(private dataService: DataService, private toastr: ToastrService, public route: ActivatedRoute, public router: Router) {
    this.getClient(this.route.snapshot.params.id);
  }

  ngOnInit(): void {
    this.getAllDirections();
  }

  getAllDirections(): void {
    this.dataService.get('Directions')
      .then(
        (data: Direction[]) => {
          this.allDirections = data;
        },
        (err) => {
          console.log(err);
        });
  }

  patchAdmins(idAdmin: string): void {
    this.dataService.patch('Utilisateurs', idAdmin, this.admin)
    .then(
      (res: any) => {
        this.admin = res;
        console.log('patch : ', res);
        this.router.navigate(['/home/admin']);
        this.showSuccess('Admin modifié avec succés !', 'Modification');

      },
      err => {
        console.log(err);
      }
    );
  }

  getClient(id: string): void {
    this.dataService.get('Utilisateurs/' + id)
      .then(
        (res: Utilisateur) => {
          this.admin = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  showSuccess(message, title): void {
    this.toastr.success(message, title, {
      timeOut: 3000,
      positionClass: 'toast-top-right'
    });
  }

  showError(message, title): void {
    this.toastr.error(message, title, {
      timeOut: 3000,
      positionClass: 'toast-top-right'
    });
  }
}
