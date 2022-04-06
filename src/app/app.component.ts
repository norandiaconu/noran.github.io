import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'noran-github-io';
  display = false;

  ngOnInit(): void {
    console.log("a");
    // $("#test").fadeIn(2000);
    // $('#projects').fadeIn(2000);
  }

  toggle(): void {
    this.display = !this.display;
  }
}
