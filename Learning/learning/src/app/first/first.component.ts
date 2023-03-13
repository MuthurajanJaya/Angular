import { Component } from '@angular/core';
import { directive } from 'src/directive';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hrT4v1ivekUd1prs83VY1Ya1NW3UU3V5fg3nKPmIrw&s";
  data = directive;
  
}
