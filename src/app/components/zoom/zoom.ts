import { Component } from '@angular/core';

@Component({
  selector: 'app-zoom',
  imports: [],
  templateUrl: './zoom.html',
  styleUrl: './zoom.css',
})

export class Zoom {

  height = 50;

  zoomIn() {
    this.height *= 1.1;
  }

}
