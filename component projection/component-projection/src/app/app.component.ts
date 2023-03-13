import { Component, OnInit } from '@angular/core';
import { SidebarComponent} from './sidebar/sidebar.component'
import { NavbarComponent } from './navbar/navbar.component';
import { UpbarComponent } from './upbar/upbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'project';
  domain:any;
  constructor() {

  }

  // ngOnInit(){
  //   this.domain = SidebarComponent;
  // }
  // domainSidebar() {
  //   this.domain = SidebarComponent;
  // }
  // domainNavbar() {
  //   this.domain = NavbarComponent;
  // }
  // domainUpbar() {
  //   this.domain = UpbarComponent;
  // }

  // array:any = [
  //   {names : 'Dinesh K'},
  //   {names : 'Sridhar T'},
  //   {names : 'Gowtham R'},
  // ];

  array:any = [
    {names : 'JAI',age : 22,Domain :'LAMP'},
    {names : 'MOULI',age : 21,Domain :'JAVA'},
    {names : 'REVI',age : 21,Domain :'JAVA'},
    {names : 'HANI',age : 20,Domain :'Java'},
  ];
  change1 = 'change1';
  change2 = 'change2';
  colorvalue= 'blue';

  username = 'JAYABHARATHI M';

  company = 'Aspire Systems';
  location = 'Chennai';
  disabledBox = true;
  enableBox() {
    this.disabledBox = false;
  }

  link = "https://angular.io";
  uplink = "https://angular.io/";

  passing= "true";

  mouseleavecalling() {
    alert('you leaving');
  }
  keyupcalling() {
    console.log("key is pressed");
  }
  
  day = new Date();
  num1 = 250000;
  num2 = 77;
  case1 = 'JayAbHaRaThI';

  holdercalling(holder:any) {
    console.log(holder);  
  }
}
