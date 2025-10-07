import { Component, ViewEncapsulation } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  imports: [DashboardItemComponent, NewTicketComponent]
})
export class TicketsComponent {}
