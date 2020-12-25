import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/models/vehicule';
import {DataService} from '../../shared/data/data.service';

@Component({
  selector: 'app-allocation-vehicule',
  templateUrl: './allocation-vehicule.component.html',
  styleUrls: ['./allocation-vehicule.component.css']
})
export class AllocationVehiculeComponent implements OnInit {

  title = 'Allocation vehicules';
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

}
