import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h3>{{"Hello " + name}}</h3>
  <button (click)="sendEvent()">Send Event</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  @Input('parentData') public name:any;

  @Output() public childEvent=new EventEmitter();

  sendEvent(){
    this.childEvent.emit('Welcome to WebMonk');
  }

  constructor(){}
  ngOnInit(): void {
    
  }
}
