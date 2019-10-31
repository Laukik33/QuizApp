import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {


  constructor(private router: Router) { 
  }

    //get user questions into an array
    
  name = this.router.getCurrentNavigation().extras.state.name;
  //Password = this.router.getCurrentNavigation().extractedUrl.state.Password;
  
  ngOnInit() {
  }

}
