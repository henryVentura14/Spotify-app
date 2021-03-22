import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;
  error: boolean;
  message: string;

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  search(term: string) {
    this.loading = true;
    this.spotify.getArtists(term)
      .subscribe((data: any) => {
        this.artists = data;
        this.loading = false;
      }, (error) => {
        this.error = true;
        this.message = error.error.error.message;
        this.loading = false;
      });
  }
}
