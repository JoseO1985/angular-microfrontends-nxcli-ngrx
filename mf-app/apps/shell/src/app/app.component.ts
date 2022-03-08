import { Component } from '@angular/core';
import { GalleryFacade } from '@mf-app/shared/data-store';

@Component({
  selector: 'mf-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shell';

  constructor(private galleryFacade: GalleryFacade) {}

  ngOnInit(): void {
    this.galleryFacade.init();
  }
}
