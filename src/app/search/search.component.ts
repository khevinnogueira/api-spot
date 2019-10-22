import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  id: number;
  profile: any;
  image: any;
  playlists: any;
  track: any;

  constructor(
    private _spotifyService: SpotifyService,
  ) { }

  ngOnInit() {

    this.getPlay();

  }


  getPlay() {
    this._spotifyService.getPlaylists().pipe(take(1)).subscribe(res => {
      console.log(res);
      this.playlists = res;
      console.log("Teste", this.playlists.items[0].id)
      this.id = this.playlists.items[0].id;
      this._spotifyService.getPlaylistTracks(this.id).pipe(take(1)).subscribe(res => {
        console.log("Tracks", res)
        this.track = res;

      })
    })
  }

}
