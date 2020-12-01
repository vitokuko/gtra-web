import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListVehiculeComponent } from './list-vehicule/list-vehicule.component';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    AccueilComponent,
    ListVehiculeComponent,
    AddVehiculeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent
  ]
})
export class HomeModule { }
