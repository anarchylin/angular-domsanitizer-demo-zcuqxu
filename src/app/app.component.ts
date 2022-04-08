import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<p>
  <iframe width="560" height="315" [src]="youtubeUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </p>`
})
export class AppComponent  {
  youtubeUrl = 'https://www.youtube.com/embed/DnPrNiA-ZLE'
}
