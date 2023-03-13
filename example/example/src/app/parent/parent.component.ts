import { Component,Input,OnInit,OnDestroy,OnChanges,AfterViewInit,AfterContentInit,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnDestroy,OnChanges,AfterViewInit,AfterContentInit,AfterViewChecked{
  @Input() name:any;

  @Input() fullname :any;

  constructor() {
  }
  ngOnChanges() {
    console.log('parent Onchange trigged');
  }

  ngOnInit() {
    console.log('parent Component Initialized');
  }

  ngOnDestroy() {
    console.log('parent Component destroyed');
  }

  ngAfterViewInit(): void {
    console.log("parent ngAfterViewInit")
  }

  ngAfterContentInit(): void {
    console.log("parent ngAfterContentInit");
  }

  ngAfterViewChecked(): void {
    console.log("parent ngAfterViewChecked");
  }


  salesproduct :any = "mobilAs with all essays, before you begin writing a five-paragraph essay, you first need to know your thesis, or main topic. Your thesis is the idea you will defend or expand upon, and ultimately what your entire essay is about, and the three paragraphs in the middle will support, prove, or elaborate on your thesis.";

  names1 = 'BHARATHI';
}