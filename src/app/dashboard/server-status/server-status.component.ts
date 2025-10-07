import { Component, OnInit } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
// ngOnInit() will run even if we dont implement OnInit, but
// you should implement OnInit to avoid any typos in ngONInut(!) method name...
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {}

  ngOnInit() { // Similar to implementing inside the constructor. ngOnInit 
  // runs AFTER constructor, so all initialized variables (not inputs!)
  // are avaialble in ngOnInit.
  // Any inputs will be available inside ngOnInit.
    setInterval(() => {
      const rn = Math.random(); //0-0.99999999999
      if (rn < 0.5) {
        this.currentStatus = 'offline';
      } else if (rn < 0.9) {
        this.currentStatus = 'online';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 3000);
  }
}
