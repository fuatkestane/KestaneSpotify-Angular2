import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;

    constructor(private http: Http) {

    }

    searchMusic(str:string, type='artist'){
        this.searchUrl='https://api.spotify.com/v1/search?q='+str+'&type='+type+'&market=TR';
        return this.http.get(this.searchUrl).map(res => res.json());
    }

    getArtist(id:string){
        this.artistUrl='https://api.spotify.com/v1/artists/'+id;
        return this.http.get(this.artistUrl).map(res => res.json());
    }

    getAlbums(artistId:string){
        this.albumsUrl='https://api.spotify.com/v1/artists/'+artistId+'/albums';
        return this.http.get(this.albumsUrl).map(res => res.json());
    }

    getAlbum(id:string){
        this.albumUrl='https://api.spotify.com/v1/albums/'+id;
        return this.http.get(this.albumUrl).map(res => res.json());
    }
}