import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import {DataService} from '../../../shared/data/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.css']
})
export class ModifierClientComponent implements OnInit {

  title = 'Modifier des clients';
  allclients: Utilisateur[]= [];

  client: Utilisateur = new Utilisateur();


  constructor(private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  patchClient(clientId: any): void {
    this.dataService.patch('Utilisateurs', clientId, 'data')
    .then(
      (res: any) => {
        this.client = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
