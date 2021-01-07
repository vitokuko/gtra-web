import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../../../../models/categorie';
import { Vehicule } from 'src/app/models/vehicule';
import {DataService} from '../../../../../shared/data/data.service';
import { ToastrService } from 'ngx-toastr';
import {Utilisateur} from '../../../../../models/utilisateur';
import {Direction} from '../../../../../models/direction';
import {Marque} from '../../../../../models/marque';
import {Modele} from '../../../../../models/modele';
import {Parking} from '../../../../../models/parking';
import {Router} from '@angular/router';


@Component({
  selector: 'app-allocation-vehicule',
  templateUrl: './allocation-vehicule.component.html',
  styleUrls: ['./allocation-vehicule.component.css']
})
export class AllocationVehiculeComponent implements OnInit {

  title = 'Allocation vehicules';
  allvehicules: Vehicule[]= [];
  allCategories: Categorie[] = [];
  allUtilisateurs: Utilisateur[] = [];
  allDirections: Direction[] = [];
  allMarques: Marque[] = [];
  allModeles: Modele[] = [];
  allParkings: Parking[] = [];
  



  vehicule: Vehicule = new Vehicule();

  constructor(private dataService: DataService, private toastr: ToastrService, public router: Router) { }

  ngOnInit(): void {
    this.getAllUtilsateurs();
    this.getAllDirections();
    this.getAllMarques();
    this.getAllModeles();
    this.getAllParkings();
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.dataService.get(`Categories`)
      .then(
        (res: Categorie[]) => {
          this.allCategories = res;
          this.getAllVehiculesByCategorie(res[0].id);
        },
        err => {
          console.log(err);
        }
      );
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

  getAllVehiculesByCategorie(idCategorie: string): void {
    this.dataService.get(`Categories/${idCategorie}/Vehicule?filter={"include": ["categorie", "utilisateur", "parking", "modele", "direction", "marque"]}`)
      .then(
        (res: Vehicule[]) => {
          console.log(res);
          this.allvehicules = res;
        },
        err => {
          console.log(err);
        }
      );
  }


  deleteVehicule(vehiculeId: string): void {
    this.dataService.delete('Vehicules', vehiculeId)
    .then(
      (res: any) => {
        console.log('delete : ', res)
        this.showSuccess('Vehicule supprimé avec succés !', 'Suppression');
        this.getAllCategories();
      },
      err => {
        console.log(err);
      }
    );
  }

  postVehicules(): void {
    this.dataService.post('Vehicules' , this.vehicule)
    .then(
      (res: any) => {
        console.log(res);
        this.vehicule = res;
        console.log('add : ', res)
        this.showSuccess('Vehicule attribué avec succés !', 'Ajout');
        this.getAllCategories();
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
