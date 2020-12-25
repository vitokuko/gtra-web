import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/models/vehicule';
import { ToastrService } from 'ngx-toastr';
import { Categorie } from './../../models/categorie';
import {DataService} from '../../shared/data/data.service';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.css']
})
export class AddVehiculeComponent implements OnInit {

  title = 'Add vehicules';
  vehicule: Vehicule = new Vehicule();
  vehicules: Vehicule[] = [];


  categorie: Categorie[] = [];


  constructor(private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.postVehicules();
  }


  postVehicules(): void {
    this.dataService.post('Vehicules' , this.vehicule)
    .then(
      (res: any) => {
        console.log(res);
        this.vehicule = res;
        console.log('add : ', res)
        this.showSuccess('Vehicule ajouté avec succés !', 'Ajout');
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
