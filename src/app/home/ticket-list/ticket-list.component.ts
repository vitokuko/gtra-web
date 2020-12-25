import { Component, OnInit } from '@angular/core';
import { DossierTravails } from 'src/app/models/dossiertravails';
import {DataService} from '../../shared/data/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  title = 'Liste des tickets';
  alltickets: DossierTravails[]= [];

  dossiertravail: DossierTravails = new DossierTravails();

  constructor(private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllTickets();
  }

  getAllTickets(): void {
    this.dataService.get('DossierTravails')
      .then(
        (res: any) => {
          console.log(res);
          this.alltickets= res;
        },
        err => {
          console.log(err);
        }
      );
  }

  patchTicket(): void {
    this.dataService.patch('DossierTravails', 'id', 'data')
    .then(
      (res: any) => {
        this.dossiertravail = res;
        this.getAllTickets();
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteTicket(dossiertravailId: string): void {
    this.dataService.delete('DossierTravails', dossiertravailId)
    .then(
      (res: any) => {
        console.log('delete : ', res)
        this.showSuccess('Ticket supprimé avec succés !', 'Suppression');
        this.getAllTickets();
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
