import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {

  }



  // Para  consulta generica
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;


    // Defino Headers que API de Spotify Necesita
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQBqEuW5Il5X1n-9rF6ft6MvECVhvz56DU7NpKhyR5tFqhKh-4TUiglU6W9D1Gzzf1336v51-wfC5oKEI0nMaWF5GUpD6do0Z71ZCKJLunToOO6qYODBvpzFTNe9s2KAF7qjAv7H_RGKZOYHvp1nPIDwAtVsM4d56uj5R1raSPuvsB2D3rVTU_hnbJy--15nFzh8Er62jqn8VLjoQDn8QF_e-0-UtvG4wCY-i6bu7SgWlFTVYKyNJ9WTZ10-UL3g-jYpb9IoVl4v5aGnxg"
    });

    return this.http.get(url, { headers });
  }

  /* RETORNA OS DADOS DE PERFIL  */
  getProf() {
    return this.getQuery(`me`);

  }
  /* RETORNA AS  PLAYLITS */
  getPlaylists() {
    return this.getQuery(`me/playlists`);

  }
  /* RETORNA A  PLAYLIST */
  getPlaylist(playlist_id: any) {
    return this.getQuery(`playlists/${playlist_id}`);
  }
  /* RETORNA AS TRACKS DA PLAYLIST */
  getPlaylistTracks(playlist_id: any) {
    return this.getQuery(`playlists/${playlist_id}/tracks`);
  }

}
