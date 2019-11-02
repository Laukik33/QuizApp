import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
Name

  constructor(private router: Router) { 
    if (this.router.getCurrentNavigation().extras.state != null){
      this.Name = this.router.getCurrentNavigation().extras.state.name;

      
    }


  }
    
  ngOnInit() {
    console.log(this.Name)
  }
  
  
  

  signOut(){
    this.router.navigate(['/register']);
  }

}