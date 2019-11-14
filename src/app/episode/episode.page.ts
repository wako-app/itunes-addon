import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Episode, PluginLoaderService, Show } from '@wako-app/mobile-sdk';

@Component({
  selector: 'app-tab1',
  templateUrl: 'episode.page.html',
  styleUrls: ['episode.page.scss']
})
export class EpisodePage implements OnInit {
  @ViewChild('episodeRef', {read: ViewContainerRef, static: true})
  episodeVCRef: ViewContainerRef;

  constructor(private pluginLoader: PluginLoaderService) {
  }

  ngOnInit() {
    this.loadPlugin();
  }

  loadPlugin() {
    const data: { show: Show, episode: Episode } = JSON.parse(
      `{"show":{"title":"Prison BreakZEZEAZE","year":2005,"imdbId":"tt0455275","tmdbId":2288,"tvdbId":360115,"traktId":2274,"slug":"prison-break","overview":"Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.","trailer":"http://youtube.com/watch?v=AL9zLctDJaU","firstAired":"2005-08-30T01:00:00.000Z","runtime":45,"rating":8.2,"votes":17275,"language":"en","genres":["drama","crime","action","adventure","suspense"],"certification":"TV-14","airedEpisodes":88,"images_url":{"poster":"https://image.tmdb.org/t/p/w300/5E1BhkCgjLBlqx557Z5yzcN0i88.jpg","backdrop":"https://image.tmdb.org/t/p/w500/92OPBZpLc82y8CzOtrQ8P9RDvIN.jpg","poster_original":"https://image.tmdb.org/t/p/original/5E1BhkCgjLBlqx557Z5yzcN0i88.jpg","backdrop_original":"https://image.tmdb.org/t/p/original/92OPBZpLc82y8CzOtrQ8P9RDvIN.jpg"},"alternativeTitles":{"sa":"Prison Break","bg":"Бягство от затвора","bs":"Prison Break","cz":"Útěk z vězení","dk":"Prison Break","de":"Prison Break","gr":"Η Απόδραση","us":"Prison Break","es":"Prison Break","mx":"Prison Break: En busca de la verdad","ir":"فرار از زندان","fi":"Pako","ca":"La Grande Évasion","fr":"Prison Break","il":"נמלטים","hu":"A szökés","it":"Prison Break","ge":"ციხიდან გაქცევა","kr":"프리즌 브레이크","lt":"Kalėjimo bėgliai","lv":"Izlaušanās","nl":"Prison Break","pl":"Skazany na śmierć","br":"Prison Break: Em Busca da Verdade","pt":"Prison Break","ro":"Evadarea din pușcărie","ru":"Побег","sk":"Prison Break: Útek z väzenia","si":"Prison Break","rs":"Бекство из затвора","se":"Prison Break","th":"Prison Break","tr":"Büyük Kaçış","ua":"Втеча з в'язниці","vn":"Prison Break","cn":"越狱","tw":"越獄風雲"},"originalTitle":"Prison Break"},"episode":{"traktSeasonNumber":1,"traktNumber":1,"code":"S01E01","title":"Pilot","imdbId":"tt0678483","tmdbId":168222,"tvdbId":7055372,"traktId":180255,"overview":"Michael Scofield is imprisoned in Fox River State Penitentiary. He finds his brother, Lincoln Burrows, who is a death row prisoner, and tells him that he is going to break them both out of the prison.","firstAired":"2005-08-30T01:00:00.000Z","rating":8,"votes":2609,"runtime":43,"watched":false}}`
    );
    this.pluginLoader.createComponent('episodes', this.episodeVCRef, data);
  }
}
