import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string="";
   password:string="";
   colors:string="";
   msg:string="";
  usernames:string='sharukh';
  passwords:string='sharukh';
  
 
  
  checklogin() {
    if(this.username===this.usernames&&this.password===this.passwords) {
      this.msg="sucessfully login";
     this.colors="green";
    }
     else if(this.username!==this.usernames&&this.password!==this.passwords) {
      this.msg="check Credintials";
      this.colors="red";
     
    }
  }
}
