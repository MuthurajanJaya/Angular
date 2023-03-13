import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom //Creates its own DOM{Private} and won't get styled by emulated or by global css file 
})
export class Comp2Component {

}
