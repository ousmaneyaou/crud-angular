import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../models/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private http: HttpClient) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve: any, reject: any) => {
        this.http.get<Etudiant>('http://localhost:8089/etudiants').subscribe(
          (response: any) => {
            if (response.authenticatedUser) {
              resolve(true);
            } else {
              this.router.navigate(['/autentification', 'signin']);
              resolve(false);
            }
          },
          (error: any) => {
            console.error('Error occurred:', error);
            resolve(false);
          }
        );
      }
    );
  }
}
