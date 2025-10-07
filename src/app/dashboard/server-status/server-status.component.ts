import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
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
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // private intervalId?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  // Example showing use of "effect" to subscribe to signal, which allows to 
  // act upon signal changes...
  // And another example showing how to perform some cleanup before the effect
  // function runs again...
  constructor() {
    // effect(() => {
    //   console.log("Current status is:", this.currentStatus());
    // });
    // effect((onCleanUp) => { 
      // Timer will go on ticking if the status doesn't change.
      // But will be cleared, and restart ticking if the status does change.
    //   console.log("Current status is:", this.currentStatus());
    //   let count = 0;
    //   const timer = setInterval(() => {
    //     count++;
    //     console.log("Timer ticks: ", count);
    //   }, 1000);
    //   onCleanUp(() => clearInterval(timer));
    // });
  }

  ngOnInit() { // Similar to implementing inside the constructor. ngOnInit 
  // runs AFTER constructor, so all initialized variables (not inputs!)
  // are avaialble in ngOnInit.
  // Any inputs will be available inside ngOnInit.
    // this.intervalId = setInterval(() => {
    const intrvlId = setInterval(() => {
      const rn = Math.random(); //0-0.99999999999
      if (rn < 0.5) {
        this.currentStatus.set('offline');
      } else if (rn < 0.9) {
        this.currentStatus.set('online');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 3000);

    // Modern way of using destroyRef to register destroy listener:
    this.destroyRef.onDestroy(() => clearInterval(intrvlId)); 
  }

  // ngOnDestroy(): void {
  //   clearInterval(this.intervalId);
  // }
}
