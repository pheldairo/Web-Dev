import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div *ngIf="loading" class="loading">
      <div class="spinner"></div><p>Loading album...</p>
    </div>

    <div *ngIf="album && !loading" class="detail-container">
      <div class="breadcrumb">
        <a routerLink="/albums">Albums</a> / Album #{{ album.id }}
      </div>

      <div class="card">
        <h1>Album Detail</h1>
        <div class="info-row"><span class="label">ID</span><span class="value">{{ album.id }}</span></div>
        <div class="info-row"><span class="label">User ID</span><span class="value">{{ album.userId }}</span></div>

        <div class="edit-section">
          <label class="label">Title</label>
          <input [(ngModel)]="editTitle" class="title-input" />
          <button class="btn-save" (click)="saveTitle()" [disabled]="saving">
            {{ saving ? 'Saving...' : '💾 Save' }}
          </button>
          <span *ngIf="saveSuccess" class="success-msg">✅ Saved!</span>
        </div>
      </div>

      <div class="actions">
        <a [routerLink]="['/albums', album.id, 'photos']" class="btn-primary">🖼️ View Photos</a>
        <a routerLink="/albums" class="btn-secondary">← Back to Albums</a>
      </div>
    </div>
  `,
  styles: [`
    .loading { text-align: center; padding: 3rem; color: #666; }
    .spinner {
      width: 40px; height: 40px; border: 4px solid #eee;
      border-top-color: #e94560; border-radius: 50%;
      animation: spin 0.8s linear infinite; margin: 0 auto 1rem;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .breadcrumb { margin-bottom: 1.5rem; color: #888; font-size: 0.9rem; }
    .breadcrumb a { color: #e94560; text-decoration: none; }
    .card {
      background: white; border-radius: 12px; padding: 2rem;
      border: 1px solid #e0e0e0; margin-bottom: 1.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    h1 { font-size: 1.6rem; color: #1a1a2e; margin-bottom: 1.5rem; }
    .info-row { display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem; }
    .label { font-weight: 600; color: #555; min-width: 80px; font-size: 0.9rem; }
    .value { color: #333; }
    .edit-section { display: flex; align-items: center; gap: 1rem; margin-top: 1rem; flex-wrap: wrap; }
    .title-input {
      flex: 1; min-width: 200px; padding: 0.5rem 0.8rem;
      border: 1px solid #ddd; border-radius: 6px; font-size: 0.95rem;
    }
    .title-input:focus { outline: none; border-color: #e94560; }
    .btn-save {
      background: #e94560; color: white; border: none;
      padding: 0.5rem 1.2rem; border-radius: 6px; cursor: pointer;
      font-weight: 600; transition: background 0.2s;
    }
    .btn-save:hover:not(:disabled) { background: #c73652; }
    .btn-save:disabled { opacity: 0.6; cursor: not-allowed; }
    .success-msg { color: #4caf50; font-weight: 600; }
    .actions { display: flex; gap: 1rem; flex-wrap: wrap; }
    .btn-primary {
      display: inline-block; background: #e94560; color: white;
      padding: 0.7rem 1.5rem; border-radius: 6px; text-decoration: none;
      font-weight: 600; transition: background 0.2s;
    }
    .btn-primary:hover { background: #c73652; }
    .btn-secondary {
      display: inline-block; background: #f0f0f0; color: #333;
      padding: 0.7rem 1.5rem; border-radius: 6px; text-decoration: none;
      font-weight: 600; transition: background 0.2s;
    }
    .btn-secondary:hover { background: #e0e0e0; }
  `]
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editTitle = '';
  loading = true;
  saving = false;
  saveSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editTitle = data.title;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  saveTitle(): void {
    if (!this.album) return;
    this.saving = true;
    this.saveSuccess = false;
    const updated = { ...this.album, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe({
      next: (data) => {
        this.album = { ...this.album!, title: data.title || this.editTitle };
        this.saving = false;
        this.saveSuccess = true;
        setTimeout(() => this.saveSuccess = false, 2500);
      },
      error: () => { this.saving = false; }
    });
  }
}
