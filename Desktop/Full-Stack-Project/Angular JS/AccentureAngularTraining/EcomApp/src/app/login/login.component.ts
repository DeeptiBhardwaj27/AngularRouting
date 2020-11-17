import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public email:string="";
  public password:string="";

  public user={
    email:'', password:''
  }

  //style Binding
  public isHidden :boolean=false;
  public isActive :boolean=false;
  ngOnInit(): void {
  }
  
  submit()
  {
    console.log(this.user);
    // console.log(`Email:${this.email}  and Password: ${this.password}`);
  }
}
