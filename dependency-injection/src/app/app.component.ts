import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dependency-injection';

  // // Without DI
  // class Car{
  //   engine;
  //   tires;
  //   constructor(engine, tires)
  //   {
  //     this.engine=new Engine();
  //     this.tires=new Tires();
  //   }
  // }
}
