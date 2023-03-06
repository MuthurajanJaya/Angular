import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',

  template:`
  <h2> Welcome {{name}}</h2><hr>
  <input [id]="myId" type="text" value="Jay">
  <input [disabled]="true" id={{myId}} type="text" value="Anu">
  <input [disabled]="isDisabled" id={{myId}} type="text" value="Janu">
  <input bind-disabled="true" id={{myId}} type="text" value="Ajay"><hr>
  
  <h2 class="text-success">Class</h2>
  <h2 [class]="successClass">Class Binding-1</h2>
  <h2 class="text-special" [class]="successClass">Class Binding-2</h2>
  <h2 [class.text-danger]="!hasError">Class Binding-3</h2>
  <h2 [ngClass]="messageClass">Class Binding-4</h2><hr>

  <h2 [style.color]="'orange'">Style</h2>
  <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
  <h2 [style.color]="highlightColor">Style Binding-2</h2>
  <h2 [ngStyle]="titleStyle">Style Binding-3</h2><hr>

  <h3>Event Binding</h3>
  <button (click)="onClick($event)">Click Me</button>
  {{greeting}}<br>
  <button (click)="greeting='Welcome JAI'">Click Me</button><br><hr>
  
  <h3>Template Reference Variable</h3>
  <input #myInput type="text"> 
  <button (click)="logMessage(myInput.value)">Log</button><hr>

  <h3>Two Way Binding</h3>
  <input [(ngModel)]="username" type="text"> 
  {{username}}

  `, 
  //#myInput--> Template Reference Variables
  // <h2>{{a=2+2}}</h2>
  // <h2>{{window.location.href}}</h2>
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit{
  
  public name="Jai";
  public myId="testId";
  public isDisabled=false;

  public successClass="text-success";
  public hasError=false;
  public isSpecial=true;
  public messageClass={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special": this.isSpecial
  }

  public highlightColor="#aa2aa5";
  public titleStyle={
    color:"blue",
    fontStyle: "italic"
  }

  public greeting="";

  public siteUrl=window.location.href;

  public username="";

  constructor(){ }
  ngOnInit(){
      
  }
  
  onClick(event:Event){
    console.log(event);
    this.greeting=event.type;
  }

  greetUser(){
    return "Hello "+this.name
  }

  logMessage(value:any){
    console.log(value);
  }
}