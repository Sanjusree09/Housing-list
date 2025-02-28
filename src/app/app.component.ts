import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { HomeComponentComponent } from "./home-component/home-component/home-component.component";

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, RouterLink],
  //templateUrl: './app.component.html',
  template:`
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assests/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>

 

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'home-project';
}
