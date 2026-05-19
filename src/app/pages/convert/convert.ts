import { Component } from '@angular/core';
import { ConvertTemp } from "../../components/convert-temp/convert-temp";
import { ConvertLength } from "../../components/convert-length/convert-length";

@Component({
  selector: 'app-convert',
  imports: [ConvertLength, ConvertTemp],
  templateUrl: './convert.html',
  styleUrl: './convert.css',
})
export class Convert {}
