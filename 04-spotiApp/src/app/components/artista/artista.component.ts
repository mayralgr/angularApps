import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent{

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;
  constructor(private activated: ActivatedRoute,
              private spotifyService: SpotifyService)
  {
    this.loading = true;
    this.activated.params.subscribe(params => {
      console.log(params.id);
      this.getArtista(params.id);
      this.getTopTracks (params.id);
    });
  }

  getArtista(id: string): void
  {
    this.spotifyService.getArtista(id).subscribe(data => {
      console.log(data);
      this.artista = data;
      this.loading = false;
    });
  }

  getTopTracks(id: string): void
  {
    this.spotifyService.getTopTracks(id).subscribe(topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }

}
