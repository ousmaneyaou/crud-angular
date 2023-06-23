import { Component, OnInit } from '@angular/core';
import { AutentificatonService } from '../services/autentificaton.service';
import { Etudiant } from '../models/etudiant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit{

  etudiants: Array<Etudiant> = [];
  public Recherche: string="";
  

  constructor(private autentificationService: AutentificatonService,
              private router: Router) {}

  ngOnInit() {
    this.autentificationService.getEtudiants().subscribe({
      next: (data: Etudiant[]) => {
        this.etudiants = data;
      },
      error: (err: Etudiant) => {
        console.log('Erreur lors de la récupération des produits', err);
      }
    });
  }
  


  handleCheckEtudiant(etudiant: Etudiant) {
    this.autentificationService.checkEtudiants(etudiant).subscribe({
      next: updateetudiants => {
        etudiant.checked = !etudiant.checked;
      }
    });
  }

  handleDelete(etudiant: Etudiant){
    if(confirm("Etes vous sur de vouloir supprimer?"))
    this.autentificationService.deleteEtudiants(etudiant).subscribe({
      next: value => {
        this.etudiants=this.etudiants.filter(p=>p.id!=etudiant.id);
      }
    });
  }
// pour la recherche
searchEtudiant(){
    this.autentificationService.rechercheEtudiants(this.Recherche).subscribe({
      next: value => {
        this.etudiants=value;
      }
    })
  }
 
  onNewEtudiants() { // creation d'un nouveau etudiant
    this.router.navigate(['/etudiants', 'new']);
  }

}
