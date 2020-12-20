import { Component, OnInit } from '@angular/core';
import { DossierTravails } from 'src/app/models/dossiertravails';
import {DataService} from '../../shared/data/data.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  title = 'Liste des tickets';
  alltickets: DossierTravails[]= [];

  dossiertravail: DossierTravails = new DossierTravails();

  id = typeof this.dossiertravail=== 'number' ? this.dossiertravail : this.dossiertravail.id;

  constructor(private dataService: DataService) { }

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
}
