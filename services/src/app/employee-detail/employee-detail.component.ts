import { Component } from '@angular/core';

@Component({
  selector: 'employee-detail',
  template:`
  <h2>Employee Details</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.id}}.{{employee.name}}-{{employee.age}}</li>
  </ul>`,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {

  public employees = [
    { "id": 1, "name": "Jai", "age": 23 },
    { "id": 2, "name": "Mouli", "age": 22 },
    { "id": 3, "name": "Revi", "age": 21 },
    { "id": 4, "name": "Hani", "age": 20 },
  ];
}
