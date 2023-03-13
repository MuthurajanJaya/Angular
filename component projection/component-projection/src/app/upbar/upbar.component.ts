import { Component } from '@angular/core';

@Component({
  selector: 'app-upbar',
  template: `<b>Dynamic Component</b>`  ,
  styles: [`b{
    background-color: yellow;
    color: black;
}`]
})
export class UpbarComponent {
  // searchvalue :string = '';

}
