import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="breadcrumb">
      <a routerLink="/albums">Albums</a> /
      <a [routerLink]="['/albums', albumId]">Album #{{ albumId }}</a> /
      Photos
    </div>

    <h1>📷 Album #{{ albumId }} — Photos</h1>

    <div *ngIf="loading" class="loading">
      <div class="spinner"></div><p>Loading photos...</p>
    </div>

    <div *ngIf="!loading" class="photo-grid">
      <div *ngFor="let photo of photos" class="photo-card">
        <img [src]="photo.thumbnailUrl" [alt]="photo.title" loading="lazy" />
        <p class="photo-title">{{ photo.title }}</p>
      </div>
    </div>

    <div class="actions">
      <a [routerLink]="['/albums', albumId]" class="btn-secondary">← Back to Album</a>
    </div>
  `,
  styles: [`
    .breadcrumb { margin-bottom: 1rem; color: #888; font-size: 0.9rem; }
    .breadcrumb a { color: #e94560; text-decoration: none; }
    h1 { font-size: 1.8rem; color: #1a1a2e; margin-bottom: 1.5rem; }
    .loading { text-align: center; padding: 3rem; color: #666; }
    .spinner {
      width: 40px; height: 40px; border: 4px solid #eee;
      border-top-color: #e94560; border-radius: 50%;
      animation: spin 0.8s linear infinite; margin: 0 auto 1rem;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .photo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .photo-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #eee;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .photo-card:hover { transform: translateY(-3px); box-shadow: 0 6px 16px rgba(0,0,0,0.1); }
    .photo-card img { width: 100%; height: 150px; object-fit: cover; display: block; }
    .photo-title {
      font-size: 0.75rem;
      color: #555;
      padding: 0.5rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .actions { margin-top: 1rem; }
    .btn-secondary {
      display: inline-block; background: #f0f0f0; color: #333;
      padding: 0.7rem 1.5rem; border-radius: 6px; text-decoration: none;
      font-weight: 600; transition: background 0.2s;
    }
    .btn-secondary:hover { background: #e0e0e0; }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId: number = 0;
  loading = true;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => { this.photos = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
