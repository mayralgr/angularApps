import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error = false;
  mensajeError: string;
  constructor( spotifyService: SpotifyService )
  {
    this.loading = true;
    this.error = false;
    this.mensajeError = '';
    spotifyService.getNewReleases()
    .subscribe((data: any) => {
      // console.log(data.albums.items);
      this.nuevasCanciones = data;
      this.loading = false;
    }, ( errorServicio: any ) => {
      this.mensajeError = errorServicio.error.error.message;
      this.error = true;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
