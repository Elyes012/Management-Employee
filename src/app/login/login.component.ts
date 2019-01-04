import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthsystemService } from '../services/authsystem.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formlogin : FormGroup;
  constructor(private authSystem : AuthsystemService, private fb : FormBuilder, private router : Router) { 
    this.formlogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
      
    });
  }

  loginSimple() {
    if (this.formlogin.valid) {
    this.authSystem.userLogin(this.formlogin.value);
    this.router.navigateByUrl('/listemployees');
  }
}

  ngOnInit() {
  }
 
}
