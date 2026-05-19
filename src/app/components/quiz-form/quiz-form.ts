import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-form',
  imports: [FormsModule],
  templateUrl: './quiz-form.html',
  styleUrl: './quiz-form.css',
})

export class QuizForm {

  questions = [
    {
      question: 'Hur många feet är 1 meter?',
      answers: ['1.5', '3.28', '10'],
      correctAnswer: '3.28'
    },

    {
      question: 'Hur många fahrenheit är 0 celsius?',
      answers: ['32', '100', '0'],
      correctAnswer: '32'
    },

    {
      question: 'Hur många meter är 10 feet?',
      answers: ['3.05', '8', '1'],
      correctAnswer: '3.05'
    }
  ];

  currentIndex = 0;
  score = 0;
  showResult = false;

  selectAnswer(answer: string) {

    const currentQuestion = this.questions[this.currentIndex];

    if (answer === currentQuestion.correctAnswer) {
      this.score++;
    }

    this.currentIndex++;

    if (this.currentIndex >= this.questions.length) {
      this.showResult = true;
    }

  }

  resetQuiz() {
    this.currentIndex = 0;
    this.score = 0;
    this.showResult = false;
  }

}