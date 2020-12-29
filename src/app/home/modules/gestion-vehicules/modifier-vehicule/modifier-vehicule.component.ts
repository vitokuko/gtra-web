import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Vehicule } from 'src/app/models/vehicule';
import {DataService} from '../../../../shared/data/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Utilisateur} from '../../../../models/utilisateur';
import {Direction} from '../../../../models/direction';
import {Marque} from '../../../../models/marque';
import {Modele} from '../../../../models/modele';
import {Parking} from '../../../../models/parking';
import {Categorie} from '../../../../models/categorie';

@Component({
  selector: 'app-modifier-vehicule',
  templateUrl: './modifier-vehicule.component.html',
  styleUrls: ['./modifier-vehicule.component.css']
})
export class ModifierVehiculeComponent implements OnInit {
  title = 'List vehicules';
  allvehicules: Vehicule[] = [];
  allUtilisateurs: Utilisateur[] = [];
  allDirections: Direction[] = [];
  allMarques: Marque[] = [];
  allModeles: Modele[] = [];
  allParkings: Parking[] = [];
  allCategories: Categorie[] = [];

  vehicule: Vehicule = new Vehicule();

  constructor(private dataService: DataService, private toastr: ToastrService, public route: ActivatedRoute, public router: Router) {
    this.getVehicule(this.route.snapshot.params.id);
  }

  ngOnInit(): void {
    this.getAllUtilsateurs();
    this.getAllDirections();
    this.getAllMarques();
    this.getAllModeles();
    this.getAllParkings();
    this.getAllCategories();
  }

  patchVehicules(idVehicule: string): void {
    this.dataService.patch('Vehicules', idVehicule, this.vehicule)
    .then(
      (res: any) => {
        this.vehicule = res;
        console.log('patch : ', res);
        this.router.navigate(['/home/listVehicule']);
        this.showSuccess('Vehicule modifié avec succés !', 'Modification');

      },
      err => {
        console.log(err);
      }
    );
  }

  getVehicule(id: string): void {
    this.dataService.get('Vehicules/' + id)
      .then(
        (res: Vehicule) => {
          this.vehicule = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getAllCategories(): void {
    this.dataService.get('Categories')
      .then(
        (data: Categorie[]) => {
          this.allCategories = data;
        },
        (err) => {
          console.log(err);
        });
  }

  getAllUtilsateurs(): void {
    this.dataService.get('Utilisateurs')
      .then(
        (data: Utilisateur[]) => {
          this.allUtilisateurs = data;
        },
        (err) => {
          console.log(err);
        });
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

  getAllMarques(): void {
    this.dataService.get('Marques')
      .then(
        (data: Marque[]) => {
          this.allMarques = data;
        },
        (err) => {
          console.log(err);
        });
  }

  getAllModeles(): void {
    this.dataService.get('Modeles')
      .then(
        (data: Modele[]) => {
          this.allModeles = data;
        },
        (err) => {
          console.log(err);
        });
  }

  getAllParkings(): void {
    this.dataService.get('Parkings')
      .then(
        (data: Parking[]) => {
          this.allParkings = data;
        },
        (err) => {
          console.log(err);
        });
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
