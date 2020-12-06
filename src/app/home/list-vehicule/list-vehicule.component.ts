import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data/data.service';

@Component({
  selector: 'app-list-vehicule',
  templateUrl: './list-vehicule.component.html',
  styleUrls: ['./list-vehicule.component.css']
})
export class ListVehiculeComponent implements OnInit {

  title = 'List elisa';
  allvehicules = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
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
