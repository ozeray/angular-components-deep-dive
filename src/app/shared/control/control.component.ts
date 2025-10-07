import { Target } from '@angular/compiler';
import {
  AfterContentInit,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // Disable view encapsualtion to make
  // CSS settings apply to input, textarea, etc. HTML elements,
  // disregarding the host component's situation in the DOM.
  // If you use ViewEncapsulation.ShodowDom, the component will not
  // inherit global styles!
  host: {
    class: 'control', // Used to add custom attributes to our control components.
    // This way, our CSS styles (.control ...) are applied successfully,
    // because class="control" is added to app-control in HTML.

    /* Assigning event using host element
   '(click)': 'onClicked($event)' */
  },
})
export class ControlComponent {
  title = input<string>();

  // Old way of assigning attributes to host:
  // @HostBinding('class') className = "control";

  /*
  onClicked = (e: Event) => {
    console.log("Clicked", e.target);
  } */

  /*
  private el = inject(ElementRef); // Injecting host for programmatic access.
  // Assigning event listener using @HostListener:
  @HostListener('click', ['$event'])
  onClick(e: Target) {
    console.log('clicked', e);
    console.log(this.el);
  }
  */

  // Example showing ContentChild usage:
  // @ContentChild('input') inputElement?: 
  //     ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  // @HostListener('click', ['$event'])
  // onClick(e: Target) {
  //   console.log(this.inputElement);    
  // }

  // Using AfterContentInit: 
  // private inputElement = contentChild('input');
  // ngAfterContentInit(): void {
  //   console.log(this.inputElement());
  // }
}
