import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: //`
  // <h2 *ngIf="displayName;else elseBlock">
  //     ngIf directive
  // </h2>

  // <ng-template #elseBlock>
  // <h2 >
  //     This Structural Directive is Hidden
  // </h2>
  // </ng-template>
  // `,
  `
  <h2>ngIf Directive</h2>
  <div *ngIf="displayName;then thenBlock; else elseBlock"></div>

  <ng-template #thenBlock>
  <h3>
       ngIf directive
   </h3>
   </ng-template>

   <ng-template #elseBlock>
  <h3>
       This Structural Directive is Hidden
   </h3>
   </ng-template><hr>

   <h2>ngSwitch Directive</h2>
   <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You Picked red</div>
    <div *ngSwitchCase="'blue'">You Picked blue</div>
    <div *ngSwitchCase="'green'">You Picked green</div>
    <div *ngSwitch="'yellow'">You Picked yellow</div>
    <div *ngSwitchDefault=>Pick Again</div>
   </div><hr>

   <h2>ngFor Directive</h2>
   <div *ngFor="let color of arrayOfColors;index as i;first as f;last as l;odd as o;even as e">
      <h3>{{i}} {{f}} {{l}} {{o}} {{e}}-{{arrayOfColors}}</h3>
   </div>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent{

  displayName=true;

  public color="red";

  public arrayOfColors=["red","blue","green","yellow"];
  constructor(){ }
}
