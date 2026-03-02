import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="nav-brand">🎵 Album Browser</div>
      <ul class="nav-links">
        <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
        <li><a routerLink="/about" routerLinkActive="active">About</a></li>
        <li><a routerLink="/albums" routerLinkActive="active">Albums</a></li>
      </ul>
    </nav>
    <main class="main-content">
      <router-outlet />
    </main>
  `,
  styles: [`
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #1a1a2e;
      color: white;
      padding: 0 2rem;
      height: 60px;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    .nav-brand {
      font-size: 1.3rem;
      font-weight: 700;
      letter-spacing: 1px;
    }
    .nav-links {
      list-style: none;
      display: flex;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }
    .nav-links a {
      color: #ccc;
      text-decoration: none;
      font-size: 0.95rem;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      transition: all 0.2s;
    }
    .nav-links a:hover, .nav-links a.active {
      color: white;
      background: #e94560;
    }
    .main-content {
      max-width: 1100px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
    }
  `]
})
export class AppComponent {}
