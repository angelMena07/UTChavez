import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-rafavideos',
  templateUrl: './rafavideos.component.html',
})
export class RafavideosComponent implements OnInit {
  title = 'Lista de videos Profesor Rafael';
  videoList = [
    {
      name: 'Java cap 1',
      embed: `L1oMLsiMusQ`
    },
    {
      name: 'Java cap 2',
      embed: `Cs5ymoNkrX8`
    },
    {
      name: 'Java cap 3',
      embed: `Cdr4wTz0Wro`
    },
    {
      name: 'Java cap 4',
      embed: `vJTeIJx_Kn0`
    }
  ];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getEmbedUrl(item) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.embed + '?ecver=2');
  }

}
