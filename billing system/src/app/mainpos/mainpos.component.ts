import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router,ActivatedRoute } from "@angular/router";
import{ Obj} from '../obj'



@Component({
  selector: 'app-mainpos',
  templateUrl: './mainpos.component.html',
  styleUrls: ['./mainpos.component.css']
})
export class MainposComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  l:boolean=true;
  pizza:string;
  data:Array<Obj>=[];
  datas:any={};
  chips:String;
section() {
  this.l=false;
  this.router.navigate(['/section'],{ skipLocationChange: true });

}
s(){
  this.l=false;
  this.router.navigate(['payement'],{ skipLocationChange: true });

}
dd() {
 this.datas={name:"1+Chips - £1.00"};
 this.data.push(this.datas);
}
dd2() {
  this.datas={name:"1+Soda - £2.00"};
  this.data.push(this.datas);
 }
 dd3() {
  this.datas={name:"1+Garlic bread -£1"};
  this.data.push(this.datas);
 }
 dd4() {
  this.datas={name:"1+Pizza - £3.00"};
  this.data.push(this.datas);
 }
 dd5() {
  this.datas={name:"1+Pizza - £5.00"};
  this.data.push(this.datas);
 }

}
