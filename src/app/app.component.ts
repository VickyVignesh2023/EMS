import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myform: any;
  ngOnInit(): void {
    this.myform = new FormGroup({
      name: new FormControl(Validators.required),
      age : new FormControl(Validators.minLength(18), Validators.required),
      email :new FormControl(Validators.email,Validators.required)      
      
    })

      
    
    
    
  }
  
  
}