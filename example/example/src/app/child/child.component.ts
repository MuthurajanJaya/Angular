import { Component,Input,OnChanges,OnInit,OnDestroy,AfterViewInit, ViewEncapsulation,AfterContentInit,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation : ViewEncapsulation.ShadowDom
})
export class ChildComponent implements OnChanges,OnInit,OnDestroy,AfterViewInit,AfterContentInit,AfterViewChecked {

  @Input() mobilephones:any;

  constructor() {
  }

  ngOnChanges() {
    console.log('child Onchange trigged');
  }

  ngOnInit() {
    console.log('child Component Initialized');
  }

  ngOnDestroy() {
    console.log('child Component destroyed');
  }

  ngAfterViewInit(): void {
    console.log("child ngAfterViewInit")
  }

  ngAfterContentInit(): void {
    console.log("child ngAfterContentInit");
  }

  ngAfterViewChecked(): void {
    console.log("child ngAfterViewChecked");
  }

}
