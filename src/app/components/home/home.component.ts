import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  newSongs: any[] = []

  constructor(private spotify: SpotifyService) {
    console.log('home')
  }

  ngOnInit() {
    this.spotify.getNewRealeases()
      .subscribe((data: any) => {
        this.newSongs = data;
      });
  }
}
