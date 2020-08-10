import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-departmentsection',
  templateUrl: './departmentsection.component.html',
  styleUrls: ['./departmentsection.component.css']
})
export class DepartmentsectionComponent implements OnInit {

  constructor(private router :Router) { }
  y:boolean=true;

  ngOnInit(): void {
  }
  pos() {
    this.y=false;
this.router.navigate(['mpos'],{skipLocationChange:true})
  }

}
