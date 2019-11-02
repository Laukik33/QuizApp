import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuizService } from "../shared/quiz.service"
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  Name
  difficulty: any //works with [(ngModel on html select tag)]
  category: any;

  constructor(private _quizService: QuizService, private router: Router) {
    this.Name = this.router.getCurrentNavigation().extras.state.name;
  }
  ngOnInit() {
  }

  onSubmitForm() {
    this._quizService.getQuestion(this.difficulty, this.category).subscribe((response) => {
      console.log(response)

      this.router.navigate(['/quiz'],
        {
          state:
          {
            name: this.Name,
            category: this.category,
            difficulty: this.difficulty,
            response: response
            
          }
        });
    })

  }

}
