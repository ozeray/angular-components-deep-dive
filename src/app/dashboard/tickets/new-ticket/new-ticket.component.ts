import { Component, ElementRef, EventEmitter, output, Signal, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent {
  add = output<{title: string, text: string}>();

  @ViewChild(ButtonComponent) btn?: ElementRef<ButtonComponent>;
  // We could use @ViewChildren if there were multiple instances of type
  // ButtonComponent.

  // @ViewChild('form') form?: ElementRef<HTMLFormElement>; Newer way:
  private form: Signal<ElementRef<HTMLFormElement>> = 
      viewChild.required<ElementRef<HTMLFormElement>>('form');
      // We used requred, because we are sure that it exists.

  // Example to show resetting the form, by taking form argument from the
  // template.
  // onSubmit(title: string, text: string, form: HTMLFormElement) {
  //   console.log(title, text);
  //   form.reset();
  // }

  onSubmit(title: string, text: string) {
    // console.log(title, text);
    // console.log(this.btn);
    // console.log(this.form);
    this.add.emit({title, text});
    this.form().nativeElement.reset(); // Accessing template variable without
    // passing them as an argument.
  }

  // Using AfterViewInit:
  // ngAfterViewInit(): void {
  //   console.log(this.btn);
  // }

  // Example using afterRender and afterNextRender:
  // constructor() {
  //   afterRender(() => { // afterRender is executed whenever any change occurs
  //     //in the entire app.
  //     console.log("afterRender");
  //   });

  //   afterNextRender(() => { // afterNextRender is executed only after the next render
  //     //in the entire app.
  //     console.log("afterNextRender");
  //   });
  // }
}
