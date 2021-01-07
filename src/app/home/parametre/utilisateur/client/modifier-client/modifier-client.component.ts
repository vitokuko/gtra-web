import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import {DataService} from '../../../../../shared/data/data.service';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {Direction} from '../../../../../models/direction';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.css']
})
export class ModifierClientComponent implements OnInit {

  title = 'Modifier des clients';
  allclients: Utilisateur[]= [];
  allDirections: Direction[] = [];

  client: Utilisateur = new Utilisateur();


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

  patchClients(idClient: string): void {
    this.dataService.patch('Utilisateurs', idClient, this.client)
    .then(
      (res: any) => {
        this.client = res;
        console.log('patch : ', res);
        this.router.navigate(['/home/client']);
        this.showSuccess('Client modifié avec succés !', 'Modification');

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
          this.client = res;
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
