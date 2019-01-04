import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../services/employee.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeForm : FormGroup;
  constructor(private employeeService : EmployeeService) { 
    this.employeeForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      position: new FormControl('', [Validators.required, Validators.minLength(4)]),
      office: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      salary: new FormControl('', [Validators.required, Validators.minLength(1), Validators.minLength(6)]),
    });
  }

  ngOnInit() {
 
  }
addEmployee(){
this.employeeService.insertEmployee(this.employeeForm.value);
console.log('data component', this.employeeForm.value)
this.resetForm(this.employeeForm);
}

resetForm(employeeForm) {
  employeeForm.reset();
  this.employeeService.selectedEmployee = {
    $key: null,
    firstname : '',
    lastname: '',
    position : '',
    office : '',
    email: '',
    salary : 0,

  }
this.ngOnInit();
}
}
