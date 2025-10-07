import { Component } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  imports: [DashboardItemComponent, NewTicketComponent, TicketComponent],
})
export class TicketsComponent {

  tickets: Ticket[];

  constructor() {
    const ls = localStorage.getItem('tickets');
    this.tickets = ls ? JSON.parse(ls) : [];
  }

  onAdd(ticketData: { title: string; text: string }) {
    this.tickets.push({
      id: Date.now().toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open',
    });
    localStorage.setItem('tickets', JSON.stringify(this.tickets));
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map(t => {
      return t.id === id ? {...t, status: 'closed'} : t;
    });
    localStorage.setItem('tickets', JSON.stringify(this.tickets));
  }
}
