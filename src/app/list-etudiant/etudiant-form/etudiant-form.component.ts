import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutentificatonService } from 'src/app/services/autentificaton.service';

@Component({
  selector: 'app-etudiant-form',
  templateUrl: './etudiant-form.component.html',
  styleUrls: ['./etudiant-form.component.css']
})
export class EtudiantFormComponent implements OnInit{

  etudiantForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private autentificationService: AutentificatonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.etudiantForm = this.formBuilder.group({
      firstname: this.formBuilder.control('', [Validators.required]),
      lastname: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required]),
      domain: this.formBuilder.control('', [Validators.required]),
      checked: this.formBuilder.control(false, [Validators.required])
    });
  }

  onSaveEtudiant() {
   let etudiant=this.etudiantForm.value;
   this.autentificationService.saveEtudiants(etudiant).subscribe({
    next: data => {
      alert(JSON.stringify(data));
    },
    error: err => {
      console.log('erreur d"enregistrement');
    } 
   })
  }
  onBack() {
    this.router.navigate(['/etudiants']);
  }

}
