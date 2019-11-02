//configure routing in application
import { Routes } from '@angular/router'
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component'
import { ResultComponent } from './result/result.component';
import { SelectComponent } from './select/select.component';

//constant for routing as an array of objects
export const appRoutes: Routes = [
    //routes to different components
    { path: 'register', component: RegisterComponent},
    { path: 'quiz', component: QuizComponent },
    { path: 'result', component: ResultComponent },
    { path: 'select', component: SelectComponent},
    // { path: '**', component: RegisterComponent}
    
    
    
    //route for default routing
    { path: '**', redirectTo: '/register', pathMatch:'full' }

]