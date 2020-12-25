import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data/data.service';
import { ToastrService } from 'ngx-toastr';
import { Role } from 'src/app/models/role';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  title = 'Listes des roles';
  allroles: Role[]= [];

  role: Role = new Role();

 
  constructor(private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllRoles();
    this.deleteRole(this.role.id);
  }


 getAllRoles(): void {
    this.dataService.get(`Roles`)
      .then(
        (res: any) => {
          console.log(res);
          this.allroles = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  deleteRole(roleId: string): void {
    this.dataService.delete('Roles', roleId)
    .then(
      (res: any) => {
        console.log('delete : ', res)
        this.showSuccess('Role supprimé avec succés !', 'Suppression');
      
      
      },
      err => {
        console.log(err);
      }
    );
  }

  postRole(): void {
    this.dataService.post('Roles' , this.role)
    .then(
      (res: any) => {
        console.log(res);
        this.role = res;
        console.log('add : ', res)
        this.showSuccess('Role ajouté avec succés !', 'Ajout');
        this.getAllRoles();
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