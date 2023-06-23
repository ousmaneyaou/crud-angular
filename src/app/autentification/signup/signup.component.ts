import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private http: HttpClient,
              private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      number: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    this.http.post<any>("http://localhost:8089/signupUsers", this.signUpForm.value)
      .subscribe(
        (res) => {
          alert("Signup successful");
          this.signUpForm.reset();
          this.router.navigate(['/autentification/signin']);
        },
        (error) => {
          alert("Something went wrong");
        }
      );
  }

}
