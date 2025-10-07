import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  
  // Transform example:
  // data = input.required<Ticket, Ticket>({
  //   transform: (value: Ticket) => {
  //     return { ...value, status: 'closed' };
  //   },
  // });
  
  close = output<void>({ alias: 'closeTicket' }); // Using alias. Then, tickets will
  // use (closeTicket)="onCloseTicket.. instead of (close)=..
  // Using aliases are not recommended, as errors happen silently.

  detailsVisible = signal(false);

  toggleDetailsVisible() {
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onTicketComplete() {
    this.close.emit();
  }
}
