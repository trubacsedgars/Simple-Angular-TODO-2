import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title = 'angular-intro';
  showDescription = false

  about = {
    createdAt: '2011-10-05T14:48:00.000Z',
    description: 'An awesome page',
    rating: 3.5738292847
  }

  toggleShowDescription(): void {
    this.showDescription = !this.showDescription;
  }
}
