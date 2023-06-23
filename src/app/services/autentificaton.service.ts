import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../models/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class AutentificatonService {
  checketudiant(etudiant: Etudiant) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  public getEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Array<Etudiant>>('http://localhost:8089/etudiants');
  }
  
  public checkEtudiants(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.patch<Etudiant>(`http://localhost:8089/etudiants/${etudiant.id}`, 
    { checked: !etudiant.checked });
  }
// pour la supprimer
  public deleteEtudiants(etudiant: Etudiant): Observable<any> {
    return this.http.delete<Etudiant>(`http://localhost:8089/etudiants/${etudiant.id}`);
  }

  public saveEtudiants(etudiant: Etudiant): Observable<Etudiant>{
  return this.http.post<Etudiant>(`http://localhost:8089/etudiants`, 
  etudiant);
  }

  public rechercheEtudiants(Recherche: string): Observable<Etudiant[]> {
    return this.http.get<Array<Etudiant>>(`http://localhost:8089/etudiants?firstname_like=${Recherche}`);
  }
}



