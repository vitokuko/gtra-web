import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Vehicule } from 'src/app/models/vehicule';
import {DataService} from '../../shared/data/data.service';

@Component({
  selector: 'app-modifier-vehicule',
  templateUrl: './modifier-vehicule.component.html',
  styleUrls: ['./modifier-vehicule.component.css']
})
export class ModifierVehiculeComponent implements OnInit {
  title = 'List vehicules';
  allvehicules: Vehicule[] = [];


  vehicule: Vehicule = new Vehicule();

  constructor(private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  patchVehicules(): void {
    this.dataService.patch('Vehicules', 'id', this.vehicule)
    .then(
      (res: any) => {
        this.vehicule = res;
        console.log('patch : ', res)
        this.showSuccess('Vehicule modifié avec succés !', 'Modification');
    
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
