import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/models/vehicule';
import {DataService} from '../../shared/data/data.service';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.css']
})
export class AddVehiculeComponent implements OnInit {

  title = 'Add vehicules';
  allvehicules: Vehicule[]= [];

  vehicule: Vehicule = new Vehicule();


  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.postVehicules();
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
