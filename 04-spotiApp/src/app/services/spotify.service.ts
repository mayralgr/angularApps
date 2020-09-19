import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  newReleases: any;
  constructor(private http: HttpClient, ) {
    console.log('spotify service');
  }

  getQuery(query: string): Observable<object>
  {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBx_ZMyMeNk8y6t1AQemqvMtFg7Ua9clgsX_1MesexQC5x_BFa-H_AuT323Eaxhgi0WrQeC7L41mkykYVo',
    });
    return this.http.get(url, {headers});
  }

  // tslint:disable-next-line:typedef
  getNewReleases()
  {
    return this.getQuery('browse/new-releases').pipe(
      map( (data: any ) => {
        return data.albums.items;
      })
    );
  }

  getArtistas(termino: string): any
  {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtista(id: string): any
  {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string): any
  {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data: any) => data.tracks)
    );
  }
}
