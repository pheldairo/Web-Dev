import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="hero">
      <h1>Welcome to Album Browser</h1>
      <p>Here you can take a look around your photos (or i hope so)</p>
      <a routerLink="/albums" class="btn-primary">Browse Albums →</a>
    </div>
    <div class="features">
      <!--Feeling cute might do later-->
    </div>
  `,
  styles: [`
    .hero {
      text-align: center;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #1a1a2e, #16213e);
      border-radius: 12px;
      color: white;
      margin-bottom: 2rem;
    }
    .hero h1 { font-size: 2.5rem; margin-bottom: 1rem; }
    .hero p { font-size: 1.1rem; color: #aaa; margin-bottom: 2rem; max-width: 550px; margin-left: auto; margin-right: auto; }
    .btn-primary {
      display: inline-block;
      background: #e94560;
      color: white;
      padding: 0.8rem 2rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      transition: background 0.2s;
    }
    .btn-primary:hover { background: #c73652; }
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }
    .feature-card {
      background: #f9f9f9;
      border-radius: 10px;
      padding: 1.5rem;
      text-align: center;
      font-size: 1.5rem;
      border: 1px solid #eee;
    }
    .feature-card p { font-size: 0.9rem; color: #666; margin-top: 0.5rem; }
  `]
})
export class HomeComponent {}
