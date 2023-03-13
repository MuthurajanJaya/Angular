import { outputAst } from '@angular/compiler';
import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  title :string = "JAYABHARATHI";
  @Input()  idno:any; //parent to child

  childmsg : string = 'Message from child'

  childmsg_outout = "using Output Method"

  @Output() msgEvent = new EventEmitter();

  myFunc() {
    this.msgEvent.emit(this.childmsg_outout);
  }

}