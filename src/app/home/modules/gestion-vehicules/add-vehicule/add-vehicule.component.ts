import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/models/vehicule';
import { ToastrService } from 'ngx-toastr';
import { Categorie } from '../../../../models/categorie';
import {DataService} from '../../../../shared/data/data.service';
import {Utilisateur} from '../../../../models/utilisateur';
import {Direction} from '../../../../models/direction';
import {Marque} from '../../../../models/marque';
import {Modele} from '../../../../models/modele';
import {Parking} from '../../../../models/parking';
import {Router} from '@angular/router';



@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.css']
})
export class AddVehiculeComponent implements OnInit {

  title = 'Add vehicules';
  vehicule: Vehicule = new Vehicule();
  vehicules: Vehicule[] = [];
  allUtilisateurs: Utilisateur[] = [];
  allDirections: Direction[] = [];
  allMarques: Marque[] = [];
  allModeles: Modele[] = [];
  allParkings: Parking[] = [];
  allCategories: Categorie[] = [];



  constructor(private dataService: DataService, private toastr: ToastrService, public router: Router) { }

  ngOnInit(): void {
    this.getAllUtilsateurs();
    this.getAllDirections();
    this.getAllMarques();
    this.getAllModeles();
    this.getAllParkings();
    this.getAllCategories();
  }


  postVehicules(): void {
    this.dataService.post('Vehicules' , this.vehicule)
    .then(
      (res: any) => {
        console.log(res);
        this.vehicule = res;
        this.router.navigate(['/home/listVehicule']);
        this.showSuccess('Vehicule ajouté avec succés !', 'Ajout');
      },
      err => {
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
