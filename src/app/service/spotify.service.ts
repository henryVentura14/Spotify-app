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
      'Authorization': 'Bearer BQCDXhIJkb3gylPJzNmx4XbqBBAr478R7gvHbdiCn6teyUdKcjXSqzaBx9ETU4ZGC6sjrwgszwrST_rWoZ4'
    })
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, { headers })
  }

  getNewRealeases() {
    return this.getQuery('browse/new-releases?limit=10')
      .pipe(map(data => data['albums'].items));
  }

  getArtist(term: string) {
    return this.getQuery(`search?q=${term}n&type=artist&limit=10`)
      .pipe(map(data => data['artists'].items));
  }
}
