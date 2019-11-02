import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms'

import shuffle from 'shuffle-array'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  //Quiz Component Properties
  quizForm: FormGroup;
  
  seconds;
  questionProgress: number = 0; //number of questions answered
  timer;
  questions = []
  correctAnswer = []
  answerOption = []
  allOptions: string[];
  allOptionAnswers = []
  userAnswerArr = []
  userAnswer = ""
  score:number = 0
  Name
  category
  difficulty
  showResults: boolean = false;


  constructor(private router: Router, private fb: FormBuilder) {
    let user = this.router.getCurrentNavigation().extras.state
    this.Name = this.router.getCurrentNavigation().extras.state.name;
    // console.log('STATE Object:', user)
    

    //get user questions into an array
    for (let i = 0; i < user.response.results.length; i++) {
      let eachQuestion = user.response.results[i].question
      let eachCorrectAnswer = user.response.results[i].correct_answer
      let eachAnswerSelection = user.response.results[i].incorrect_answers

      this.questions.push(eachQuestion)
      this.correctAnswer.push(eachCorrectAnswer)
      this.allOptions = [...eachAnswerSelection, eachCorrectAnswer]
      shuffle(this.allOptions)
      console.log(this.allOptions)
      this.allOptionAnswers.push(this.allOptions)
      this.userAnswerArr[i]= ""
    }
  //   console.log(this.questions)// questions
    
  //   console.log(this.allOptionAnswers) // all possible answer selection
  //   console.log(this.correctAnswer)// correct answers



  }


//timer function
  startTimer() { 
    this.timer = setInterval(()=> {
      this.seconds++
    }, 1000)
  }
 
  nextQuestion(){
    if(this.questionProgress <= 9){
//incremet
      console.log(this.questionProgress)
      
      this.userAnswer = this.quizForm.controls['option'].value
      console.log(this.userAnswer)
      
      this.userAnswerArr[this.questionProgress] = this.userAnswer

      // this.userAnswerArr.push(this.userAnswer)
      this.quizForm.controls['option'].reset()
      this.userAnswer = ''
      console.log(this.userAnswer)
      console.log(this.userAnswerArr)
      this.questionProgress++;

    } else {
      
    }
  }
  submit() {
    
    this.score = 0;
    for (let i = 0; i< this.userAnswerArr.length; i++){
      if(this.userAnswerArr[i] === this.correctAnswer[i])
      this.score++
    }
    console.log(this.score)
    this.showResults = true

  }

  newQuiz(){
    this.router.navigate(['/select'],
        {
          state:
          {
            name: this.Name,
            category: this.category,
            difficulty: this.difficulty
            
          }
        });
        console.log(this.Name)
  }

  previousQuestion(){
    if(this.questionProgress > 0){
    this.questionProgress--;

  }

    console.log(this.userAnswerArr)
  }


  ngOnInit() {
    this.quizForm = this.fb.group({
      option: new FormControl()
    })
    
  }
  



}
