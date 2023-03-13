import { Component,ViewChild,AfterViewInit} from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  title = 'My first app';
   myId:number = 127
   message:any;
   childoutput:any;

  @ViewChild(SidebarComponent)  childcomp:any;

  ngAfterViewInit() {
    console.log(this.childcomp);
    this.message = this.childcomp.childmsg
  }
  receivemsg($event:any) {
    this.childoutput = $event;
  }
}
