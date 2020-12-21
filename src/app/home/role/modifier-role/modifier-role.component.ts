import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';
import {DataService} from '../../../shared/data/data.service';
import { ToastrService } from 'ngx-toastr';
import { ResolvedStaticSymbol } from '@angular/compiler';


@Component({
  selector: 'app-modifier-role',
  templateUrl: './modifier-role.component.html',
  styleUrls: ['./modifier-role.component.css']
})
export class ModifierRoleComponent implements OnInit {


  title = 'Modifier des roles';
  allroles: Role []= [];

  role: Role = new Role();


  constructor(private dataService: DataService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.patchRole(Role)
  }

  patchRole(roleId): void {
    this.dataService.patch('Roles', roleId, 'data')
    .then(
      (res: any) => {
        this.role = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
