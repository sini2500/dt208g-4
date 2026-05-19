import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert-length',
  imports: [FormsModule],
  templateUrl: './convert-length.html',
  styleUrl: './convert-length.css',
})
export class ConvertLength {

  meters = 0;
  feet = 0;

  convert() {
    this.feet = this.meters * 3.28084;
  }

}