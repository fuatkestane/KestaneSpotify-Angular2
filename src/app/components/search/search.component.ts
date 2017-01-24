import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';



@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [SpotifyService]
})
export class SearchComponent {
  searchStr: string;
  searchRes: Artist[];

  constructor(private spotifyService: SpotifyService) {

  }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
      console.log(this.searchRes);
      this.searchRes = res.artists.items;
    });
  }
  
}
