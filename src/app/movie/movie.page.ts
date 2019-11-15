import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PluginLoaderService } from '@wako-app/mobile-sdk';

@Component({
  selector: 'app-tab1',
  templateUrl: 'movie.page.html',
  styleUrls: ['movie.page.scss']
})
export class MoviePage implements OnInit {
  @ViewChild('movieRef', {read: ViewContainerRef, static: true})
  movieVCRef: ViewContainerRef;

  constructor(private pluginLoader: PluginLoaderService) {
  }

  ngOnInit() {
    this.loadPlugin();
  }

  loadPlugin() {
    // const data = JSON.parse(
    //   `{"movie":{"relatedIds":[],"title":"Parasite","year":2019,"imdbId":"tt6751668","tmdbId":496243,"traktId":343180,"trailer":"http://youtube.com/watch?v=isOGD_7hNIY","certification":"R","tagline":"Act Like You Own The Place","overview":"All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.","released":"2019-05-30","runtime":132,"rating":8.5,"votes":2207,"language":"ko","genres":["drama","thriller","comedy"],"images_url":{"poster":"https://image.tmdb.org/t/p/w300/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg","backdrop":"https://image.tmdb.org/t/p/w500/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg","poster_original":"https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg","backdrop_original":"https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg"},"alternativeTitles":{"bg":"Паразити","cz":"Parazit","dk":"Parasite","de":"Parasite","gr":"Παράσιτα","us":"Parasite","es":"Parásitos","mx":"Parásito","fi":"Parasite","ca":"Parasite","fr":"Parasite","il":"פרזיטים","hu":"Élősködők","id":"Parasite","it":"Parasite","jp":"パラサイト 半地下の家族","kr":"Parasite","nl":"Gisaengchung","pl":"Parasite","br":"Parasita","pt":"Parasitas","ru":"Паразиты","sk":"Parazit","rs":"Паразит","se":"Parasit","th":"ชนชั้นปรสิต","tr":"Parazit","ua":"Паразити","vn":"Ký Sinh Trùng","cn":"寄生虫","hk":"上流寄生族","tw":"寄生上流"},"originalTitle":"기생충"}}`
    // );
    const data = JSON.parse(
      `{"movie":{"relatedIds":[],"title":"Captain Marvel","year":2019,"imdbId":"tt4154664","tmdbId":299537,"traktId":193963,"trailer":"http://youtube.com/watch?v=Z1BCujX3pw8","certification":"PG-13","tagline":"Higher. Further. Faster.","overview":"The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.","released":"2019-03-08","runtime":124,"rating":7.6,"votes":15204,"language":"en","genres":["science-fiction","action","adventure","superhero"],"images_url":{"poster":"https://image.tmdb.org/t/p/w300/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg","backdrop":"https://image.tmdb.org/t/p/w500/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg","poster_original":"https://image.tmdb.org/t/p/original/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg","backdrop_original":"https://image.tmdb.org/t/p/original/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg"},"alternativeTitles":{"us":"Captain Marvel","ru":"Капитан Марвел","pt":"Captain Marvel (Capitão Marvel)","es":"Capitana Marvel","pl":"Kapitan Marvel","it":"Captain Marvel","de":"Captain Marvel","fr":"Captain Marvel","cz":"Captain Marvel","gr":"Κάπτεν Μάρβελ","mx":"Capitana Marvel","tr":"Kaptan Marvel","kr":"캡틴 마블","bg":"Капитан Марвел","tw":"驚奇隊長","il":"קפטן מארוול","ua":"Капітан Марвел","hu":"Marvel Kapitány","br":"Capitã Marvel","uz":"Kapitan Marvel","dk":"Captain Marvel","cn":"惊奇队长","hk":"Marvel隊長","ge":"კაპიტანი მარველი","sk":"Captain Marvel","se":"Captain Marvel","rs":"Капетан Марвел","nl":"Captain Marvel","sa":"كابتن مارفل","jp":"キャプテン・マーベル","ro":"Captain Marvel","hr":"Kapetanica Marvel","vn":"Đại Úy Marvel","lv":"Kapteine Mārvela","ca":"Capitaine Marvel","lt":"Kapitonė Marvel","ae":"Captain Marvel","ir":"کاپیتان مارول","by":"Капітан Марвел","th":"กัปตัน มาร์เวล","et":"Kapten Marvel","id":"Captain Marvel","fi":"Captain Marvel"},"originalTitle":"Captain Marvel"}}`
    );

    this.pluginLoader.createComponent('movies', this.movieVCRef, data);
  }
}
