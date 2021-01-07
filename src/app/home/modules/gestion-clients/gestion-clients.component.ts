import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import {DataService} from '../../../shared/data/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gestion-clients',
  templateUrl: './gestion-clients.component.html',
  styleUrls: ['./gestion-clients.component.css']
})
export class GestionClientsComponent implements OnInit {

  title = 'Listes des clients';
  textSearch: string;
  allclients: Utilisateur[] = [];

  // client: Utilisateur = new Utilisateur();


  constructor(private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(): void {
    this.dataService.get(`Utilisateurs?filter={"include":"direction"}`)
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

      deleteClient(clientId: string): void {
        this.dataService.delete('Utilisateurs', clientId)
        .then(
          (res: any) => {
            console.log('delete : ', res)
            this.showSuccess('Client supprimé avec succés !', 'Suppression');
            this.getAllClients();

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