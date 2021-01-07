import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {AccueilComponent} from './accueil/accueil.component';
import { UtilisateurComponent } from './parametre/utilisateur/utilisateur.component';
import { ClientComponent } from './parametre/utilisateur/client/client.component';
import { AdminComponent } from './parametre/utilisateur/admin/admin.component';
import { ListVehiculeComponent } from './modules/gestion-vehicules/list-vehicule/list-vehicule.component';
import { AddVehiculeComponent } from './modules/gestion-vehicules/add-vehicule/add-vehicule.component';
import { TicketListComponent } from './modules/ticket/ticket-list/ticket-list.component';
import { TicketEditComponent } from './modules/ticket/ticket-edit/ticket-edit.component';
import { TicketDetailsComponent } from './modules/ticket/ticket-details/ticket-details.component';
import { TicketAdminComponent } from './modules/ticket/ticket-admin/ticket-admin.component';
import { TicketClientComponent } from './modules/ticket/ticket-client/ticket-client.component';
import { GestionClientsComponent } from './modules/gestion-clients/gestion-clients.component';
import { GestionVehiculesComponent } from './modules/gestion-vehicules/gestion-vehicules.component';
import { GestionAttributionComponent } from './modules/gestion-vehicules/gestion-attribution/gestion-attribution.component';
import { DemandeAllocationComponent } from './modules/gestion-vehicules/gestion-attribution/demande-allocation/demande-allocation.component';
import { AllocationVehiculeComponent } from './modules/gestion-vehicules/gestion-attribution/allocation-vehicule/allocation-vehicule.component';
import { StatistiquesComponent } from './modules/statistiques/statistiques.component';
import { ComptabiliteComponent } from './modules/comptabilite/comptabilite.component';
import { ConfigurationComponent } from './parametre/configuration/configuration.component';
import { CategorieVehiculeComponent } from './parametre/configuration/categorie-vehicule/categorie-vehicule.component';
import { RoleComponent } from './parametre/role/role.component';
import { ModifierClientComponent } from './parametre/utilisateur/client/modifier-client/modifier-client.component';
import { ModifierAdminComponent } from './parametre/utilisateur/admin/modifier-admin/modifier-admin.component';
import { ModifierRoleComponent } from './parametre/role/modifier-role/modifier-role.component';
import { ConsulterAttributionClientComponent } from './modules/gestion-clients/consulter-attribution-client/consulter-attribution-client.component';
import { ConsulterTicketClientComponent } from './modules/gestion-clients/consulter-ticket-client/consulter-ticket-client.component';
import { CapexVehiculeComponent } from './modules/comptabilite/capex-vehicule/capex-vehicule.component';
import { OpexVehiculeComponent } from './modules/comptabilite/opex-vehicule/opex-vehicule.component';
import { ModifierAttributionComponent } from './modules/gestion-vehicules/gestion-attribution/allocation-vehicule/modifier-attribution/modifier-attribution.component';
import {ModifierVehiculeComponent} from './modules/gestion-vehicules/modifier-vehicule/modifier-vehicule.component';




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
        path: 'client/modifierClient/:id',
        component: ModifierClientComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
      },
      {
        path: 'admin/modifierAdmin/:id',
        component: ModifierAdminComponent,
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
        path: 'modifierVehicule/:id',
        component: ModifierVehiculeComponent,
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
        path: 'gestionClients/consulterAttributionClient',
        component: ConsulterAttributionClientComponent,
      },
      {
        path: 'gestionClients/consulterTicketClient',
        component: ConsulterTicketClientComponent,
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
        path: 'allocationVehicule/modifierAttribution',
        component: ModifierAttributionComponent,
      },
      {
        path: 'statistiques',
        component: StatistiquesComponent,
      },
      {
        path: 'comptabilite',
        component: ComptabiliteComponent,
      },
      {
        path: 'comptabilite/capexVehicule',
        component: CapexVehiculeComponent,
      },
      {
        path: 'comptabilite/opexVehicule',
        component: OpexVehiculeComponent,
      },
      {
        path: 'configuration',
        component: ConfigurationComponent,
      },
      {
        path: 'configuration/categorie-vehicule',
        component: CategorieVehiculeComponent,
      },
      {
        path: 'role',
        component: RoleComponent,
      },
      {
        path: 'role/modifierRole/:id',
        component: ModifierRoleComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
