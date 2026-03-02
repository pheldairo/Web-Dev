import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container">
      <h1>About Album Browser</h1>
      <div class="card">
        <h2>Tech used</h2>
        <ul>
          <li><strong>Main thing:</strong> Hope that it will compile...</li>
        </ul>
      </div>
      <div class="card">
        <h2> Dan9_TTpo2007</h2>
        <p><strong>Course:</strong> Web Development 2026</p>
        <p><strong>Lab:</strong> Lab 6</p>
      </div>
    </div>
  `,
  styles: [`
    .about-container h1 { font-size: 2rem; margin-bottom: 1.5rem; color: #1a1a2e; }
    .card {
      background: white;
      border-radius: 10px;
      padding: 1.5rem 2rem;
      margin-bottom: 1.5rem;
      border: 1px solid #e0e0e0;
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    }
    .card h2 { color: #e94560; margin-bottom: 0.8rem; }
    ul { padding-left: 1.2rem; }
    li { margin-bottom: 0.4rem; }
    code { background: #f0f0f0; padding: 0.1rem 0.4rem; border-radius: 3px; }
  `]
})
export class AboutComponent {}
