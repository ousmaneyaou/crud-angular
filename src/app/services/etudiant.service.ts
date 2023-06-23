import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private jsonServerUrl = 'http://localhost:8089';

  constructor(private http: HttpClient,) { }

  signOutUser(){     // methode pour la déconnexion
    return this.http.delete(`${this.jsonServerUrl}/logout`);
    
  }
}
