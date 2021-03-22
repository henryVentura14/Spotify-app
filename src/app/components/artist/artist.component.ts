import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  tracks: any[] = [];
  loading: boolean;
  error: boolean;
  message: string;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.getInArtista(params['id'])
      this.getInTopTracks(params['id'])

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

  getInTopTracks(id: string) {
    this.loading = true;
    this.spotify.getTopTracks(id)
      .subscribe((tracks: any) => {
        this.tracks = tracks;
        console.log(tracks)
        this.loading = false;
      }, (error) => {
        this.error = true;
        this.message = error.error.error.message;
        this.loading = false;
      });
  }
}
