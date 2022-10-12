import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'app';
  email="abc@gmail.com";
  password="1234";
  loginForm=new FormGroup({
    user : new FormControl(null,[Validators.required,Validators.email]),
    pass:new FormControl(null,[Validators.nullValidator,Validators.required])
  });
  
  constructor(){}
  ngOnInit():void{

  }
}
