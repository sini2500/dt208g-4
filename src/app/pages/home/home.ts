import { Component } from '@angular/core';
import { CourseComponent } from '../../components/courses/courses';

@Component({
  selector: 'app-home',
  imports: [CourseComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
