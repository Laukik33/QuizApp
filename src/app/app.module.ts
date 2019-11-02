import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import FormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './routes';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SelectComponent } from './select/select.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { QuizService } from './shared/quiz.service';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RegisterComponent,
    AppComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule

  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
