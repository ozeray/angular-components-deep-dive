import { Component } from '@angular/core';

@Component({
  // Extend built-in element with attribute selector. This allows us to 
  // avoid extra Angular tags wrapping around our component.
  // So, we can now use our button component as a regular HTML button,
  // but with appButton attribute added.
  selector: 'button[appButton]', // We could also give multiple element selector here: 'button[appButton] a[appButton]'  
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
