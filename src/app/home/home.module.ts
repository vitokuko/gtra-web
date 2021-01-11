import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UtilisateurComponent } from './parametre/utilisateur/utilisateur.component';
import { ClientComponent } from './parametre/utilisateur/client/client.component';
import { AdminComponent } from './parametre/utilisateur/admin/admin.component';
import { ListVehiculeComponent } from './modules/gestion-vehicules/list-vehicule/list-vehicule.component';
import { AddVehiculeComponent } from './modules/gestion-vehicules/add-vehicule/add-vehicule.component';
import { TicketListComponent } from './modules/ticket/ticket-list/ticket-list.component';
import { TicketEditComponent } from './modules/ticket/ticket-edit/ticket-edit.component';
import { TicketDetailsComponent } from './modules/ticket/ticket-details/ticket-details.component';
import { TicketClientComponent } from './modules/ticket/ticket-client/ticket-client.component';
import { TicketAdminComponent } from './modules/ticket/ticket-admin/ticket-admin.component';
import { GestionClientsComponent } from './modules/gestion-clients/gestion-clients.component';
import { GestionVehiculesComponent } from './modules/gestion-vehicules/gestion-vehicules.component';
import { AllocationVehiculeComponent } from './modules/gestion-vehicules/gestion-attribution/allocation-vehicule/allocation-vehicule.component';
import { DemandeAllocationComponent } from './modules/gestion-vehicules/gestion-attribution/demande-allocation/demande-allocation.component';
import { GestionAttributionComponent } from './modules/gestion-vehicules/gestion-attribution/gestion-attribution.component';
import { StatistiquesComponent } from './modules/statistiques/statistiques.component';
import { ComptabiliteComponent } from './modules/comptabilite/comptabilite.component';
import { ConfigurationComponent } from './parametre/configuration/configuration.component';
import { CategorieVehiculeComponent } from './parametre/configuration/categorie-vehicule/categorie-vehicule.component';
import { RoleComponent } from './parametre/role/role.component';
import { MarqueVehiculeComponent } from './parametre/configuration/marque-vehicule/marque-vehicule.component';
import { ModeleVehiculeComponent } from './parametre/configuration/modele-vehicule/modele-vehicule.component';
import { ParkingVehiculeComponent } from './parametre/configuration/parking-vehicule/parking-vehicule.component';
import { DirectionVehiculeComponent } from './parametre/configuration/direction-vehicule/direction-vehicule.component';
import { DepannageVehiculeComponent } from './parametre/configuration/depannage-vehicule/depannage-vehicule.component';
import { DossierTravailVehiculeComponent } from './parametre/configuration/dossier-travail-vehicule/dossier-travail-vehicule.component';
import { FournisseurVehiculeComponent } from './parametre/configuration/fournisseur-vehicule/fournisseur-vehicule.component';
import { CapexVehiculeComponent } from './modules/comptabilite/capex-vehicule/capex-vehicule.component';
import { OpexVehiculeComponent } from './modules/comptabilite/opex-vehicule/opex-vehicule.component';
import { ModifierVehiculeComponent } from './modules/gestion-vehicules/modifier-vehicule/modifier-vehicule.component';
import { ModifierClientComponent } from './parametre/utilisateur/client/modifier-client/modifier-client.component';
import { ModifierAdminComponent } from './parametre/utilisateur/admin/modifier-admin/modifier-admin.component';
import { ModifierRoleComponent } from './parametre/role/modifier-role/modifier-role.component';
import { ConsulterAttributionClientComponent } from './modules/gestion-clients/consulter-attribution-client/consulter-attribution-client.component';
import { ConsulterTicketClientComponent } from './modules/gestion-clients/consulter-ticket-client/consulter-ticket-client.component';
import { ModifierAttributionComponent } from './modules/gestion-vehicules/gestion-attribution/allocation-vehicule/modifier-attribution/modifier-attribution.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    AccueilComponent,
    UtilisateurComponent,
    ClientComponent,
    AdminComponent,
    ListVehiculeComponent,
    AddVehiculeComponent,
    TicketListComponent,
    TicketEditComponent,
    TicketDetailsComponent,
    TicketClientComponent,
    TicketAdminComponent,
    GestionClientsComponent,
    GestionVehiculesComponent,
    AllocationVehiculeComponent,
    DemandeAllocationComponent,
    GestionAttributionComponent,
    StatistiquesComponent,
    ComptabiliteComponent,
    ConfigurationComponent,
    CategorieVehiculeComponent,
    RoleComponent,
    MarqueVehiculeComponent,
    ModeleVehiculeComponent,
    ParkingVehiculeComponent,
    DirectionVehiculeComponent,
    DepannageVehiculeComponent,
    DossierTravailVehiculeComponent,
    FournisseurVehiculeComponent,
    CapexVehiculeComponent,
    OpexVehiculeComponent,
    ModifierVehiculeComponent,
    ModifierClientComponent,
    ModifierAdminComponent,
    ModifierRoleComponent,
    ConsulterAttributionClientComponent,
    ConsulterTicketClientComponent,
    ModifierAttributionComponent,
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent
  ]
})
export class HomeModule { }
