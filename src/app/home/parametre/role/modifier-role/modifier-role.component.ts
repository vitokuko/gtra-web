import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';
import {DataService} from '../../../../shared/data/data.service';
import { ToastrService } from 'ngx-toastr';
import { ResolvedStaticSymbol } from '@angular/compiler';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-modifier-role',
  templateUrl: './modifier-role.component.html',
  styleUrls: ['./modifier-role.component.css']
})
export class ModifierRoleComponent implements OnInit {


  title = 'Modifier des roles';
  allroles: Role []= [];

  role: Role = new Role();


  constructor(private dataService: DataService, private toastr: ToastrService, public route: ActivatedRoute, public router: Router) {
    this.getRole(this.route.snapshot.params.id);
  }
  ngOnInit(): void {
    
  }

  getRole(id: string): void {
    this.dataService.get('Roles/' + id)
      .then(
        (res: Role) => {
          this.role = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  patchRoles(idRole: string): void {
    this.dataService.patch('Roles', idRole, this.role)
    .then(
      (res: any) => {
        this.role = res;
        console.log('patch : ', res);
        this.router.navigate(['/home/role']);
        this.showSuccess('Role modifié avec succés !', 'Modification');

      },
      err => {
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
