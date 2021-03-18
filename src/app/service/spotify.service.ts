import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('service spotify')
  }

  getNewRealeases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDl7QddoizqRkhqCbpizsoWCybtcyBI0Rdu7_riRARAqeniOEpQgTtHGrbhuTbJOw82AQCuU0t5d5FjX2Y'
    })
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .subscribe(data => {
        console.log(data);
      })
  }
}
