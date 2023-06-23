import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './autentification/signin/signin.component';
import { SignupComponent } from './autentification/signup/signup.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { SingleEtudiantComponent } from './list-etudiant/single-etudiant/single-etudiant.component';
import { EtudiantFormComponent } from './list-etudiant/etudiant-form/etudiant-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'autentification/signup', component: SignupComponent },
  { path: 'autentification/signin', component: SigninComponent },
  { path: 'etudiants', component: ListEtudiantComponent },
  { path: 'etudiants/new', component: EtudiantFormComponent },
  { path: 'homes', component: HomeComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full'}, // si ce uniquement le path vide et pas d'autre
  { path: '**', redirectTo: 'etudiants' }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ListEtudiantComponent,
    SingleEtudiantComponent,
    EtudiantFormComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,//
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
