import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  loading: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.getInArtista(params['id'])
    })
  }

  getInArtista(id: string) {
    this.loading = true;
    this.spotify.getArtist(id)
      .subscribe(artist => {
        this.artist = artist;
        this.loading = false;
      })
  }
}
