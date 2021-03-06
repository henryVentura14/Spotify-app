import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer QASbwOyoW7XCFBZMD5laHpO49bqO0gLbzc7K7MKSIfidak0qvmse2_6QBJqoHYQQ6rCVHP-FmOAbkvNaWI'
    })
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, { headers })
  }

  getNewRealeases() {
    return this.getQuery('browse/new-releases?limit=10')
      .pipe(map(data => data['albums'].items));
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}n&type=artist&limit=10`)
      .pipe(map(data => data['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
      // .pipe(map(data => data['artists'].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
       .pipe(map(data => data['tracks']));
  }
}
