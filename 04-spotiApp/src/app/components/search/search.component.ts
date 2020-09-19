import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;
  constructor(private spotifyService: SpotifyService)
  {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  buscar(termino: string)
  {
    if ( termino !== '' )
    {
      this.loading = true;
      console.log(termino);
      this.spotifyService.getArtistas(termino).subscribe((data: any) =>
      {
        //  console.log(data);
        this.artistas = data;
        this.loading = false;
      });
    }
  }

}
