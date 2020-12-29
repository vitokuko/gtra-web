import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import {DataService} from '../../../../../shared/data/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modifier-admin',
  templateUrl: './modifier-admin.component.html',
  styleUrls: ['./modifier-admin.component.css']
})
export class ModifierAdminComponent implements OnInit {

  title = 'Modifier des administrateurs';
  alladmins: Utilisateur[]= [];

  admin: Utilisateur = new Utilisateur();


  constructor(private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  patchAdmin(adminId: any): void {
    this.dataService.patch('Utilisateurs', adminId, 'data')
    .then(
      (res: any) => {
        this.admin = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
