import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'noran-github-io';
  display = false;

  toggle(): void {
    this.display = !this.display;
  }
}
