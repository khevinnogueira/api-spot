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
        "Bearer BQA4g7BDeZYCLHDNaIsW6mIoolYbJ9Yd-QnrVSZ5IsxNh3UYYh3ZHzi5G_K1A5xJn-HW0IwYqcSgh9rmCdGATL9KdizbLQZ31Kimp55XqwBOiIjoYiQvF2_e3lZ42tln1sNiuKylfucpTfl2IepvFyvkZg6lPxUVwsVHnbdo4j7sCa14NXlSGl8BEOxTqPX7o_9GXVCBYvfHKjlD4-KsUrt4sT33sihm206EQDKf15bIUTdwt9p1jO6gjwdvfFT31GgO4IwRLpLEY_cfTQ"
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
