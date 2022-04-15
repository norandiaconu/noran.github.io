import { animate, style, transition, trigger } from "@angular/animations";
import { Component, HostListener } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    animations: [
        trigger("fade", [
            transition(":enter", [style({ opacity: 0 }), animate("0.5s ease-out", style({ opacity: 1 }))]),
            transition(":leave", [style({ opacity: 1 }), animate("0.5s ease-in", style({ opacity: 0 }))]),
        ]),
    ],
})
export class AppComponent {
    title = "noran-github-io";
    display = false;
    aboutVisible = false;
    experienceVisible = false;
    contactVisible = false;

    toggle(): void {
        this.display = !this.display;
    }

    @HostListener("window:scroll")
    scroll() {
        if (window.innerWidth > window.innerHeight) {
            if (window.scrollY > window.innerHeight * 0.7) {
                this.aboutVisible = true;
            }
            if (window.scrollY > window.innerHeight * 1.7) {
                this.experienceVisible = true;
            }
            if (window.scrollY > window.innerHeight * 2.7) {
                this.contactVisible = true;
            }
        } else {
            if (window.scrollY > window.innerHeight * 0.3) {
                this.aboutVisible = true;
            }
            if (window.scrollY > window.innerHeight * 1.1) {
                this.experienceVisible = true;
            }
            if (window.scrollY > window.innerHeight * 2.1) {
                this.contactVisible = true;
            }
        }
    }
}
