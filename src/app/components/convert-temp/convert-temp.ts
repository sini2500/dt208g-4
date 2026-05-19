import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert-temp',
  imports: [FormsModule],
  templateUrl: './convert-temp.html',
  styleUrl: './convert-temp.css',
})
export class ConvertTemp {

  celsius = 0;
  fahrenheit = 0;

  convert() {
    this.fahrenheit = (this.celsius * 9 / 5) + 32;
  }

}
