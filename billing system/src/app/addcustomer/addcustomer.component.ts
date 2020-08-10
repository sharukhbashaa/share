import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router,ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
j:boolean=true;
  pos() {
    this.j=false;
    this.router.navigate(['depart'],{ skipLocationChange: true });

  }
}
