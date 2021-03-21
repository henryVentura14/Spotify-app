import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('service spotify')
  }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC7qAyi68bDb1TaLErClqo7IYqRQvVXWWxb7x35EVmDfLbkodo0g4ndTN4KH5UJYEFpllIz7o7Y4U89K44'
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
}
