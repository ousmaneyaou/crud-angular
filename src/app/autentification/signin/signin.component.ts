import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signInForm!: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private http: HttpClient,
                private router: Router) {}

    ngOnInit() {
      this.initForm();
    }
            
    initForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
    }

    onSubmit() {
      this.http.get<any>("http://localhost:8089/signupUsers")
        .subscribe(
          (res) => {
            const user = res.find((a:any)=>{
              return a.email === this.signInForm.value.email && a.password === this.signInForm.value.password
            });
            if(user){
              alert("login Success");
              this.signInForm.reset();
              this.router.navigate(['/etudiants'])
            }else{
              alert("User not found ");
              }
          },error=>{
              alert("Quelque chose n'a pas fonctionné")
          });
    }

}


