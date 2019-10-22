import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { take } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: number;
  profile: any;
  image: any;
  playlists: any;
  totalPlaylists: [];



  constructor(
    private _spotifyService: SpotifyService,
  ) { }

  ngOnInit() {
    this.getProfile();
    this.getPlay();
  }



  getProfile() {
    this._spotifyService.getProf().pipe(take(1)).subscribe(res => {
      this.profile = res;
      this.image = this.profile.images[1];

    })
  }

  getPlay() {
    this._spotifyService.getPlaylists().pipe(take(1)).subscribe(res => {
      this.playlists = res;
      this.playlists.items.forEach(obj => {
        this.totalPlaylists = obj;
      });
    })
  }


  enviaId() {

  }

}
