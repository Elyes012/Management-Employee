import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthsystemService } from '../services/authsystem.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formregister: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authSystem : AuthsystemService) { 
    this.formregister = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
      
    });
  }

  ngOnInit() {
  }
  registerUser() {
    console.log(this.formregister.value);
    if (this.formregister.valid) {
        this.authSystem.newSignup(this.formregister.value);
        this.router.navigateByUrl('/login');
      }
}
}
