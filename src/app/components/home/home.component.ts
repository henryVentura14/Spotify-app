import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  newSongs: any[] = []
  loading: boolean;
  error: boolean;
  message: string;

  constructor(private spotify: SpotifyService) {
  }

  ngOnInit() {
    this.loading = true;
    this.error = false;
    this.spotify.getNewRealeases()
      .subscribe((data: any) => {
        this.newSongs = data;
        this.loading = false;
      }, (error) => {
        this.error = true;
        this.message = error.error.error.message;
        this.loading = false;
      });
  }
}
