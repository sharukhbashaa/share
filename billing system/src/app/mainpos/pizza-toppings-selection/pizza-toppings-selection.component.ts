import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router'
import { nextTick } from 'process';
import { MainposComponent } from '../mainpos.component';

@Component({
  selector: 'app-pizza-toppings-selection',
  templateUrl: './pizza-toppings-selection.component.html',
  styleUrls: ['./pizza-toppings-selection.component.css']
})
export class PizzaToppingsSelectionComponent implements OnInit {

  constructor( private router:Router) { }
  @ViewChild(MainposComponent) pos:MainposComponent

  ngOnInit(): void {
  }
  a:string="#3366ff";
  b:string="silver";
  c:boolean=true;
  d:boolean=false;
  s:boolean;
  clicks() {
    this.c=false;
    this.d=true;
    this.a="silver";
    this.b="#3366ff";
  
  }
  clickss() {
    this.c=true;
    this.d=false;
    this.a="#3366ff";
   this.b="silver";
  }
   next(){
     this.router.navigate(['payement'],{skipLocationChange:true})
     
   }
  

}
