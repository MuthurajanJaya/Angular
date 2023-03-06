import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>{{name}}</h2>
  <h2>{{name | lowercase}} I got shrink</h2>
  <h2>{{name | uppercase}} I'm biggy</h2>
  <h2>"{{message | titlecase}}" See the first letter of all words</h2>
  <h2>{{name | slice:3:5}}</h2>
  <h2>{{person | json}}</h2><hr>

   <h2>{{5.678 | number:'1.2-3'}}</h2>
   <h2>{{5.678 | number:'3.4-5'}}</h2>
   <h2>{{5.678 | number:'3.1-2'}}</h2><hr>

   <h2>{{0.24 | currency}}</h2>
   <h2>{{0.24 | currency: 'INR' : 'code'}}</h2><hr>

   <h2>Today is {{today | date}}</h2>
   <h2>Short: {{today | date:'short'}}</h2>
   <h2>Short Date: {{today | date:'shortDate'}}</h2>
   <h2>Short Time: {{today | date:'shortTime'}}</h2>
   <h2>Medium: {{today | date:'medium'}}</h2>
   <h2>Medium Date: {{today | date:'mediumDate'}}</h2>
   <h2>Medium Time: {{today | date:'mediumTime'}}</h2>
   <h2>Full: {{today | date:'full'}}</h2>
   <h2>Full Date: {{today | date:'fullDate'}}</h2>
   <h2>Full Time: {{today | date:'fulltime'}}</h2>
   <h2>Long: {{today | date:'long'}}</h2>
   <h2>Long Date: {{today | date:'longDate'}}</h2>
   <h2>Long Time: {{today | date:'longTime'}}</h2>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  public name = "WebMonk";
  public message = "welcome to webMonk";
  public person = {
    "firstName": "Janu",
    "lastName": "Ajay"
  }
  public today = Date.now();
}