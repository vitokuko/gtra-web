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
  allvehicules: Vehicule[]= [];

  vehicule: Vehicule = new Vehicule();

  id = typeof this.vehicule=== 'number' ? this.vehicule : this.vehicule.id;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllVehicules();
  }

  getAllVehicules(): void {
    this.dataService.get('Vehicules')
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

  patchVehicules(): void {
    this.dataService.patch('Vehicules', 'id', 'data')
    .then(
      (res: any) => {
        console.log(res);
        this.vehicule = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteVehicules(vehicule: Vehicule | number ): void {
    this.dataService.delete('Vehicules', 'id')
    .then(
      (res: any) => {
        console.log(res);
        this.vehicule = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  postVehicules(): void {
    this.dataService.post('Vehicules' , 'data')
    .then(
      (res: any) => {
        console.log(res);
        this.vehicule = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
