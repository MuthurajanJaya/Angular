import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'project';
  show = false;
  
  names1 = 'JAI';

  toggle() {
    this.show =!this.show;
  }
}
