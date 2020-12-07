import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {AccueilComponent} from './accueil/accueil.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { ListVehiculeComponent } from './list-vehicule/list-vehicule.component';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketAdminComponent } from './ticket-admin/ticket-admin.component';
import { TicketClientComponent } from './ticket-client/ticket-client.component';
import { GestionClientsComponent } from './gestion-clients/gestion-clients.component';
import { GestionVehiculesComponent } from './gestion-vehicules/gestion-vehicules.component';
import { GestionAttributionComponent } from './gestion-attribution/gestion-attribution.component';
import { DemandeAllocationComponent } from './demande-allocation/demande-allocation.component';
import { AllocationVehiculeComponent } from './allocation-vehicule/allocation-vehicule.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';


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
        path: 'utilisateur',
        component: UtilisateurComponent,
      },
      {
        path: 'client',
        component: ClientComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
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
      },
      {
        path: 'ticketClient',
        component: TicketClientComponent,
      },
      {
        path: 'ticketAdmin',
        component: TicketAdminComponent,
      },
      {
        path: 'gestionClients',
        component: GestionClientsComponent,
      },
      {
        path: 'gestionVehicules',
        component: GestionVehiculesComponent,
      },
      {
        path: 'gestionAttribution',
        component: GestionAttributionComponent,
      },
      {
        path: 'demandeAllocation',
        component: DemandeAllocationComponent,
      },
      {
        path: 'allocationVehicule',
        component: AllocationVehiculeComponent,
      },
      {
        path: 'statistiques',
        component: StatistiquesComponent,
      },
      {
        path: 'comptabilite',
        component:ComptabiliteComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
