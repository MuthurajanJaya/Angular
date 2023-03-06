import { Component } from '@angular/core';

@Component({
  selector: 'employee-list',
  template: `
  <h2>Employee List</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}}</li>
  </ul>
`,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  public employees = [
    { "id": 1, "name": "Jai", "age": 23 },
    { "id": 2, "name": "Mouli", "age": 22 },
    { "id": 3, "name": "Revi", "age": 21 },
    { "id": 4, "name": "Hani", "age": 20 },
  ];

}