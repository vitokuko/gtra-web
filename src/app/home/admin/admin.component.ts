import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import {DataService} from '../../shared/data/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = 'Listes des admins';
  alladmins: Utilisateur[]= [];

  admin: Utilisateur = new Utilisateur();

  id = typeof this.admin=== 'number' ? this.admin : this.admin.id;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllAdmins();
  }

  getAllAdmins(): void {
    this.dataService.get('Utilisateurs')
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
}