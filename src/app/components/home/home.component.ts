import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  newSongs: any[] = []
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    console.log('home')
  }

  ngOnInit() {
    this.loading = true;
    this.spotify.getNewRealeases()
      .subscribe((data: any) => {
        this.newSongs = data;
        this.loading = false;
      });
  }
}
