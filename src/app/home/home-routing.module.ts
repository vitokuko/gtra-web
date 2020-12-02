import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {AccueilComponent} from './accueil/accueil.component';
import { ListVehiculeComponent } from './list-vehicule/list-vehicule.component';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';


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
      },
      {
        path: 'ticketList',
        component: TicketListComponent,
      },
      {
        path: 'ticketEdit',
        component: TicketEditComponent,
      },
      {
        path: 'ticketDetails',
        component: TicketDetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
