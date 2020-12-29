import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/models/vehicule';
import {DataService} from '../../shared/data/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-allocation-vehicule',
  templateUrl: './allocation-vehicule.component.html',
  styleUrls: ['./allocation-vehicule.component.css']
})
export class AllocationVehiculeComponent implements OnInit {

  title = 'Allocation vehicules';
  allvehicules: Vehicule[]= [];

  vehicule: Vehicule = new Vehicule();

  constructor(private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllVehicules();
  }

  getAllVehicules(): void {
    this.dataService.get('Vehicules?filter={"include":["categorie", "marque", "modele", "utilisateur",  "direction", "parking"]}')
      .then(
        (res: any) => {
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
        this.getAllVehicules();
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
        this.getAllVehicules();
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
