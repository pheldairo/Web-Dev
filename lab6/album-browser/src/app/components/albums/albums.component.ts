import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="albums-container">
      <h1>All Albums</h1>

      <div *ngIf="loading" class="loading">
        <div class="spinner"></div>
        <p>Loading albums...</p>
      </div>

      <div *ngIf="!loading && albums.length === 0" class="empty">
        No albums found.
      </div>
      <p *ngIf="error" class="error">{{ error }}</p>

      <ul *ngIf="!loading" class="album-list">
        <li *ngFor="let album of albums" class="album-item">
          <div class="album-info" (click)="goToAlbum(album.id)">
            <span class="album-id">#{{ album.id }}</span>
            <span class="album-title">{{ album.title }}</span>
          </div>
          <button class="btn-delete" (click)="deleteAlbum(album.id, $event)">🗑️ Delete</button>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    h1 { font-size: 2rem; margin-bottom: 1.5rem; color: #1a1a2e; }
    .loading { text-align: center; padding: 3rem; color: #666; }
    .spinner {
      width: 40px; height: 40px;
      border: 4px solid #eee;
      border-top-color: #e94560;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin: 0 auto 1rem;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .album-list { list-style: none; padding: 0; }
    .album-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.9rem 1.2rem;
      background: white;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      margin-bottom: 0.6rem;
      transition: box-shadow 0.2s;
    }
    .album-item:hover { box-shadow: 0 3px 10px rgba(0,0,0,0.08); }
    .album-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      flex: 1;
    }
    .album-id {
      background: #1a1a2e;
      color: white;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.8rem;
      min-width: 40px;
      text-align: center;
    }
    .album-title { color: #333; font-size: 0.95rem; }
    .album-info:hover .album-title { color: #e94560; }
    .btn-delete {
      background: none;
      border: 1px solid #e94560;
      color: #e94560;
      padding: 0.3rem 0.8rem;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.85rem;
      transition: all 0.2s;
    }
    .btn-delete:hover { background: #e94560; color: white; }
    .empty { text-align: center; color: #999; padding: 3rem; }
  `]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  error = '';
  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => { this.albums = data; this.loading = false; },
      error: () => {
        this.loading = false;
        this.error = 'Could not load albums. API may be blocked.';
      }
    });
  }

  goToAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
