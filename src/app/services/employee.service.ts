import { Injectable } from '@angular/core';
import { Employee } from "./employee.model";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employeeList: AngularFireList<any>;
selectedEmployee: Employee = new Employee();
items;
  data: any;
  constructor(private af: AngularFireDatabase) {
    this.employeeList = this.af.list('employees');
   }
 
 getEmployee() {
this.employeeList = this.af.list('employees');
  return this.employeeList;
 } 

insertEmployee(employee: Employee) {
  console.log('insert service', employee)
  this.employeeList.push({
    
    firstname: employee.firstname,
    lastname: employee.lastname,
    position: employee.position,
    email: employee.email,
    office: employee.office,
    salary: employee.salary
  });
}
updateEmployee(employee: Employee) {
  this.employeeList.update(employee.$key,
    {
      name: employee.firstname,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    })
}
deleteEmployee($key : string){
  this.employeeList.remove($key);
}
}
