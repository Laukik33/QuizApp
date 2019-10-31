import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router"
import {RegisterService} from "../register/register.service"
import {FormGroup, FormControl, FormBuilder, Validators, Form} from "@angular/forms"
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  error: string;
  loginForm :FormGroup
  result:boolean = true;
 


  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
   
  constructor(private router: Router, private registerService: RegisterService ) { }
   
  ngOnInit() {
    
  };

  
  @ViewChild('registerForm', {static:false}) registerForm: NgForm
  onSubmit(val:any){
    // ssword;
    // this.name = val.Name;
    console.log(val.password, val.Name);
     this.result = this.registerService.getCredentials(val.Name, val.password);
      if(!this.result) {
        this.registerForm.reset()
      }
        }
     
    
   
  

}
