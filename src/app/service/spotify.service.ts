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
      'Authorization': 'Bearer BQDHesxpUECGdt6cErTQECht35EqK1QJUMo_7Nx1ieaLY2JNpPsMara5YArdZ7WhJtenk4AyBJT5mP51fIE'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
  getArtist(term:string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDHesxpUECGdt6cErTQECht35EqK1QJUMo_7Nx1ieaLY2JNpPsMara5YArdZ7WhJtenk4AyBJT5mP51fIE'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${term}n&type=artist&limit=10`, { headers });
  }
}
