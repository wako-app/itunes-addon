import { Component, Input, OnInit } from '@angular/core';
import { BrowserService, Episode, Movie, Show } from '@wako-app/mobile-sdk';
import { ItunesApiService, ItunesItemDto } from '../services/itunes-api.service';
import { finalize } from 'rxjs/operators';
import { logEvent } from '../services/tools';

@Component({
  selector: 'wk-open-button',
  templateUrl: './open-button.component.html',
  styleUrls: ['./open-button.component.scss']
})
export class OpenButtonComponent implements OnInit {
  @Input() movie: Movie;
  @Input() show: Show;
  @Input() episode: Episode;
  @Input() type: 'button' = 'button';

  loading = true;

  result: ItunesItemDto = null;

  constructor(private browserService: BrowserService, private itunesApiService: ItunesApiService) {

  }

  ngOnInit(): void {
    this.loading = true;
    let mediaType = 'movie';
    let episodeCode = null;
    const term = this.movie ? this.movie.title : this.show.title + ' season ' + this.episode.traktSeasonNumber;
    const year = this.movie ? this.movie.year : null;
    if (this.show) {
      mediaType = 'tvShow';
      episodeCode = this.episode.title;
    }

    this.itunesApiService.getItem(term, mediaType as any, year, episodeCode)
      .pipe(finalize(() => this.loading = false))
      .subscribe(data => {
        this.result = data;
      });
  }

  goTo(trackViewUrl: string) {
    this.browserService.open(trackViewUrl);
    logEvent('addon_itunes', {type: this.movie ? 'movie' : 'tv-show'});
  }
}
