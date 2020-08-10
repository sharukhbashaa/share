import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tablelayout',
  templateUrl: './tablelayout.component.html',
  styleUrls: ['./tablelayout.component.css']
})
export class TablelayoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  a:boolean=true;

  order() {
    this.a=false;
    this.router.navigate(['addcustomer'],{ skipLocationChange: true });
  }
}
