import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import {DataService} from '../../shared/data/data.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  title = 'Listes des clients';
  allclients: Utilisateur[]= [];

  client: Utilisateur = new Utilisateur();

  id = typeof this.client=== 'number' ? this.client : this.client.id;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(): void {
    this.dataService.get('Utilisateurs')
      .then(
        (res: any) => {
          console.log(res);
          this.allclients = res;
        },
        err => {
          console.log(err);
        }
      );
  }

}
