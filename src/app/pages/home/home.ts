import { Component } from '@angular/core';
import { QuizForm } from "../../components/quiz-form/quiz-form";

@Component({
  selector: 'app-home',
  imports: [QuizForm],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
