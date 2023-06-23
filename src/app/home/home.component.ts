import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imagePath: string = 'assets/2scott-graham-1h-scaled.jpg';


  constructor(private sanitizer: DomSanitizer) { }


  getSanitizedImageURL(imagePath: string) {
    return this.sanitizer.bypassSecurityTrustUrl(imagePath);
  }
  

}
