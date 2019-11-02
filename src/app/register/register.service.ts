import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { user } from "src/assets/mockData/users.json";

import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  users = [];
  
  constructor(private router: Router) { }

  getCredentials(username, password): boolean {

    user.forEach(element => {
      if (element.name == username &&
        element.password == password) {
        console.log(element);
        this.router.navigate(['/select'], { state: { name: element.name } });
        
        return true;
      }
         });
         return false;
        }

 
}