import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../services/employee.service";
import { Employee } from '../services/employee.model';
@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {
  employeeList : Employee [];
  constructor(private employeeService : EmployeeService ) { }

  ngOnInit() {
   var data = this.employeeService.getEmployee();
data.snapshotChanges().subscribe(res => {
  this.employeeList = [];
  res.forEach(item => {
    var dataFire = item.payload.toJSON();
    this.employeeList.push(dataFire as Employee)
    console.log('data component', dataFire)
  })
 
})
  }

}
