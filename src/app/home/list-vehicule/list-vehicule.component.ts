import { ToastrService } from 'ngx-toastr';
import { Categorie } from './../../models/categorie';
import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/models/vehicule';
import {DataService} from '../../shared/data/data.service';

@Component({
  selector: 'app-list-vehicule',
  templateUrl: './list-vehicule.component.html',
  styleUrls: ['./list-vehicule.component.css']
})
export class ListVehiculeComponent implements OnInit {

  title = 'List vehicules';
  allvehicules: Vehicule[] = [];
  allcategories: Categorie[] = [];

  vehicule: Vehicule = new Vehicule();

  constructor(private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.dataService.get(`Categories`)
      .then(
        (res: Categorie[]) => {
          this.allcategories = res;
          this.getAllVehiculesByCategorie(res[0].id);
        },
        err => {
          console.log(err);
        }
      );
  }

  getAllVehiculesByCategorie(idCategorie: string): void {
    this.dataService.get(`Categories/${idCategorie}/vehicules?filter={"include": ["categorie", "utilisateur", "parking", "modele", "direction", "marque"]}`)
      .then(
        (res: Vehicule[]) => {
          this.allvehicules = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  patchVehicules(): void {
    this.dataService.patch('Vehicules', 'id', 'data')
    .then(
      (res: any) => {
        this.vehicule = res;
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
