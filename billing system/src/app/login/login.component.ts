import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router,ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private routes:ActivatedRoute) { }

  ngOnInit(): void {
  }
pin:string="";
   
  pins:string='4838';
 
  
 s:boolean=true;
  
  checklogin() {
    if(this.pin===this.pins) {
this.s=false;
     
      this.router.navigate(['tablelayout'],{ skipLocationChange: true });
    }
     else if(this.pin!==this.pins) {
     alert("incorrect pin");
     
    }
  }
}
