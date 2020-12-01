import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {AccueilComponent} from './accueil/accueil.component';
import { ListVehiculeComponent } from './list-vehicule/list-vehicule.component';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'accueil',
        component: AccueilComponent,
      },
      {
        path: 'listVehicule',
        component: ListVehiculeComponent,
      },
      {
        path: 'addVehicule',
        component: AddVehiculeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
