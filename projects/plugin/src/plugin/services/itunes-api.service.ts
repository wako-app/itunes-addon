import { Injectable } from '@angular/core';
import { WakoHttpRequestService } from '@wako-app/mobile-sdk';
import { map } from 'rxjs/operators';

@Injectable()
export class ItunesApiService {

  protected baseUrl = 'https://itunes.apple.com';

  constructor() {

  }

  search(term: string, media: 'movie' | 'tvShow') {
    return WakoHttpRequestService.get<ItunesSearchDto>(this.baseUrl + '/search', {
      term: term.replace(/\s/g, '+'),
      media: media
    })
  }

  getItem(term: string, media: 'movie' | 'tvShow', episodeName?: string) {
    return this.search(term, media)
      .pipe(
        map(dto => {
          if (dto.resultCount === 0) {
            return null;
          }

          if (episodeName) {
            term += ' ' + episodeName;
          }

          let words = term
            .replace(/[^0-9a-z]/gi, ' ')
            .split(' ');


          const regexStr = words.join('.*');
          const regex = new RegExp(regexStr, 'ig');

          let result: ItunesSearchResultDto = null;

          dto.results.forEach(item => {
            let title = item.trackName;
            if (item.collectionName && item.collectionName !== item.trackName) {
              title = item.collectionName + ' ' + item.trackName;
            }

            if (title.match(regex) !== null) {
              result = item;
            }
          });

          if (result) {
            return {
              rentalPrice: result.trackRentalPrice && result.trackRentalPrice > 0 ? result.trackRentalPrice : null,
              buyPrice: result.trackPrice > 0 || result.collectionPrice > 0 ? (result.trackPrice > 0 ? result.trackPrice : result.collectionPrice) : null,
              title: result.collectionName && result.collectionName !== result.trackName ? result.collectionName + ' - ' + result.trackName : result.trackName,
              url: result.trackViewUrl,
              currency: result.currency
            } as ItunesItemDto;
          }

          return null;

        })
      )
  }
}

export interface ItunesSearchDto {
  resultCount: number;
  results: ItunesSearchResultDto[];
}

export interface ItunesSearchResultDto {
  collectionName: string;
  trackName: string;
  trackViewUrl: string;
  trackPrice: number;
  trackRentalPrice: number;
  collectionPrice: number;
  currency: string;
}

export interface ItunesItemDto {
  rentalPrice: number;
  buyPrice: number;
  title: string;
  currency: string;
  url: string;
}
