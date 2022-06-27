!function(h,v){"object"==typeof exports&&"object"==typeof module?module.exports=v(require("ionic.angular"),require("ng.common"),require("ng.core"),require("ng.forms"),require("ngx-translate.core"),require("wako-app.mobile-sdk")):"function"==typeof define&&define.amd?define(["ionic.angular","ng.common","ng.core","ng.forms","ngx-translate.core","wako-app.mobile-sdk"],v):"object"==typeof exports?exports.plugin=v(require("ionic.angular"),require("ng.common"),require("ng.core"),require("ng.forms"),require("ngx-translate.core"),require("wako-app.mobile-sdk")):h.plugin=v(h["ionic.angular"],h["ng.common"],h["ng.core"],h["ng.forms"],h["ngx-translate.core"],h["wako-app.mobile-sdk"])}(typeof self<"u"?self:this,(F,h,v,G,J,K)=>(()=>{"use strict";var Q={372:i=>{i.exports=F},223:i=>{i.exports=h},888:i=>{i.exports=v},951:i=>{i.exports=G},584:i=>{i.exports=J},95:i=>{i.exports=K}},O={};function u(i){var p=O[i];if(void 0!==p)return p.exports;var l=O[i]={exports:{}};return Q[i](l,l.exports,u),l.exports}u.d=(i,p)=>{for(var l in p)u.o(p,l)&&!u.o(i,l)&&Object.defineProperty(i,l,{enumerable:!0,get:p[l]})},u.o=(i,p)=>Object.prototype.hasOwnProperty.call(i,p),u.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var P={};return(()=>{u.r(P),u.d(P,{PluginModule:()=>Y,default:()=>Ce});var i=u(223),p=u(372),l=u(95),o=u(888);function _(n){return"function"==typeof n}function U(n){return e=>{if(function X(n){return _(n?.lift)}(e))return e.lift(function(t){try{return n(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function E(...n){(0,l.wakoLog)("plugin.itunes",n)}const k=function te(n){const t=n(r=>{Error.call(r),r.stack=(new Error).stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((r,s)=>`${s+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t});function j(n,e){if(n){const t=n.indexOf(e);0<=t&&n.splice(t,1)}}class m{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;const{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(const c of t)c.remove(this);else t.remove(this);const{initialTeardown:r}=this;if(_(r))try{r()}catch(c){e=c instanceof k?c.errors:[c]}const{_finalizers:s}=this;if(s){this._finalizers=null;for(const c of s)try{D(c)}catch(d){e=e??[],d instanceof k?e=[...e,...d.errors]:e.push(d)}}if(e)throw new k(e)}}add(e){var t;if(e&&e!==this)if(this.closed)D(e);else{if(e instanceof m){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(t=this._finalizers)&&void 0!==t?t:[]).push(e)}}_hasParent(e){const{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){const{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){const{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&j(t,e)}remove(e){const{_finalizers:t}=this;t&&j(t,e),e instanceof m&&e._removeParent(this)}}function D(n){_(n)?n():n.unsubscribe()}m.EMPTY=(()=>{const n=new m;return n.closed=!0,n})();const y={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},w={setTimeout(n,e,...t){const{delegate:r}=w;return r?.setTimeout?r.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){const{delegate:e}=w;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function A(){}const re=M("C",void 0,void 0);function M(n,e,t){return{kind:n,value:e,error:t}}class z extends m{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,function ne(n){return n instanceof m||n&&"closed"in n&&_(n.remove)&&_(n.add)&&_(n.unsubscribe)}(e)&&e.add(this)):this.destination=de}static create(e,t,r){return new ue(e,t,r)}next(e){this.isStopped?B(function se(n){return M("N",n,void 0)}(e),this):this._next(e)}error(e){this.isStopped?B(function ie(n){return M("E",void 0,n)}(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?B(re,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const ae=Function.prototype.bind;function T(n,e){return ae.call(n,e)}class le{constructor(e){this.partialObserver=e}next(e){const{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(r){S(r)}}error(e){const{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(r){S(r)}else S(e)}complete(){const{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){S(t)}}}class ue extends z{constructor(e,t,r){let s;if(super(),_(e)||!e)s={next:e??void 0,error:t??void 0,complete:r??void 0};else{let c;this&&y.useDeprecatedNextContext?(c=Object.create(e),c.unsubscribe=()=>this.unsubscribe(),s={next:e.next&&T(e.next,c),error:e.error&&T(e.error,c),complete:e.complete&&T(e.complete,c)}):s=e}this.destination=new le(s)}}function S(n){y.useDeprecatedSynchronousErrorHandling||function oe(n){w.setTimeout(()=>{const{onUnhandledError:e}=y;if(!e)throw n;e(n)})}(n)}function B(n,e){const{onStoppedNotification:t}=y;t&&w.setTimeout(()=>t(n,e))}const de={closed:!0,next:A,error:function pe(n){throw n},complete:A};class he extends z{constructor(e,t,r,s,c,d){super(e),this.onFinalize=c,this.shouldUnsubscribe=d,this._next=t?function(b){try{t(b)}catch(x){e.error(x)}}:super._next,this._error=s?function(b){try{s(b)}catch(x){e.error(x)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(b){e.error(b)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:t}=this;super.unsubscribe(),!t&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}}}let q=(()=>{class n{constructor(){this.baseUrl="https://itunes.apple.com"}search(t,r){return l.WakoHttpRequestService.get(this.baseUrl+"/search",{term:t.replace(/\s/g,"+"),media:r})}getItem(t,r,s,c){return this.search(t,r).pipe(function me(n,e){return U((t,r)=>{let s=0;t.subscribe(function fe(n,e,t,r,s){return new he(n,e,t,r,s)}(r,c=>{r.next(n.call(e,c,s++))}))})}(d=>{if(0===d.resultCount)return null;c&&(t+=" "+c);const x=t.replace(/[^0-9a-z]/gi," ").split(" ").join(".*"),Pe=new RegExp(x,"ig");let a=null;return d.results.forEach(f=>{let $=f.trackName;if(f.collectionName&&f.collectionName!==f.trackName&&($=f.collectionName+" "+f.trackName),s&&f.releaseDate){const W=f.releaseDate.split("-").shift();if(W&&+W!==s)return}null!==$.match(Pe)&&(a=f)}),a?{rentalPrice:a.trackRentalPrice&&a.trackRentalPrice>0?a.trackRentalPrice:null,buyPrice:a.trackPrice>0||a.collectionPrice>0?a.trackPrice>0?a.trackPrice:a.collectionPrice:null,preOrder:!(a.trackRentalPrice>0||a.trackPrice>0||a.collectionPrice>0),title:a.collectionName&&a.collectionName!==a.trackName?a.collectionName+" - "+a.trackName:a.trackName,url:a.trackViewUrl,currency:a.currency}:null}))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();var I=u(584);function _e(n,e){1&n&&(o.\u0275\u0275elementStart(0,"ion-button",2)(1,"ion-text"),o.\u0275\u0275text(2),o.\u0275\u0275pipe(3,"translate"),o.\u0275\u0275elementEnd()()),2&n&&(o.\u0275\u0275advance(2),o.\u0275\u0275textInterpolate(o.\u0275\u0275pipeBind1(3,1,"searching")))}function ge(n,e){1&n&&(o.\u0275\u0275elementStart(0,"span"),o.\u0275\u0275text(1),o.\u0275\u0275pipe(2,"translate"),o.\u0275\u0275elementEnd()),2&n&&(o.\u0275\u0275advance(1),o.\u0275\u0275textInterpolate1(" ",o.\u0275\u0275pipeBind1(2,1,"preOrder")," "))}const R=function(n,e){return{price:n,currency:e}};function be(n,e){if(1&n&&(o.\u0275\u0275elementStart(0,"span"),o.\u0275\u0275text(1),o.\u0275\u0275pipe(2,"translate"),o.\u0275\u0275elementEnd()),2&n){const t=o.\u0275\u0275nextContext(3);o.\u0275\u0275advance(1),o.\u0275\u0275textInterpolate1(" ",o.\u0275\u0275pipeBind2(2,1,"rentalPrice",o.\u0275\u0275pureFunction2(4,R,t.result.rentalPrice,t.result.currency))," ")}}function ve(n,e){if(1&n&&(o.\u0275\u0275elementStart(0,"span"),o.\u0275\u0275text(1),o.\u0275\u0275pipe(2,"translate"),o.\u0275\u0275elementEnd()),2&n){const t=o.\u0275\u0275nextContext(3);o.\u0275\u0275advance(1),o.\u0275\u0275textInterpolate1(" ",o.\u0275\u0275pipeBind2(2,1,"buyPrice",o.\u0275\u0275pureFunction2(4,R,t.result.buyPrice,t.result.currency))," ")}}function ye(n,e){if(1&n){const t=o.\u0275\u0275getCurrentView();o.\u0275\u0275elementStart(0,"div",4),o.\u0275\u0275listener("click",function(){o.\u0275\u0275restoreView(t);const s=o.\u0275\u0275nextContext(2);return o.\u0275\u0275resetView(s.goTo(s.result.url))}),o.\u0275\u0275template(1,ge,3,3,"span",1),o.\u0275\u0275template(2,be,3,7,"span",1),o.\u0275\u0275text(3),o.\u0275\u0275template(4,ve,3,7,"span",1),o.\u0275\u0275elementStart(5,"em"),o.\u0275\u0275element(6,"br"),o.\u0275\u0275text(7),o.\u0275\u0275elementEnd()()}if(2&n){const t=o.\u0275\u0275nextContext(2);o.\u0275\u0275advance(1),o.\u0275\u0275property("ngIf",t.result.preOrder),o.\u0275\u0275advance(1),o.\u0275\u0275property("ngIf",t.result.rentalPrice>0),o.\u0275\u0275advance(1),o.\u0275\u0275textInterpolate1(" ",t.result.rentalPrice>0&&t.result.buyPrice>0?"/":""," "),o.\u0275\u0275advance(1),o.\u0275\u0275property("ngIf",t.result.buyPrice>0),o.\u0275\u0275advance(3),o.\u0275\u0275textInterpolate1(" ",t.result.title," ")}}function xe(n,e){1&n&&(o.\u0275\u0275elementStart(0,"ion-button",2)(1,"ion-text"),o.\u0275\u0275text(2),o.\u0275\u0275pipe(3,"translate"),o.\u0275\u0275elementEnd()()),2&n&&(o.\u0275\u0275advance(2),o.\u0275\u0275textInterpolate1(" ",o.\u0275\u0275pipeBind1(3,1,"noResults"),""))}function we(n,e){if(1&n&&(o.\u0275\u0275elementContainerStart(0),o.\u0275\u0275template(1,ye,8,5,"div",3),o.\u0275\u0275template(2,xe,4,3,"ion-button",0),o.\u0275\u0275elementContainerEnd()),2&n){const t=o.\u0275\u0275nextContext();o.\u0275\u0275advance(1),o.\u0275\u0275property("ngIf",t.result),o.\u0275\u0275advance(1),o.\u0275\u0275property("ngIf",!t.result)}}let C=(()=>{class n{constructor(t){this.itunesApiService=t,this.type="button",this.loading=!0,this.result=null}ngOnInit(){this.loading=!0;let t="movie",r=null;this.show&&(t="tvShow",r=this.episode.title),this.itunesApiService.getItem(this.movie?this.movie.title:this.show.title+" season "+this.episode.seasonNumber,t,this.movie?this.movie.year:null,r).pipe(function Z(n){return U((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}(()=>this.loading=!1)).subscribe(d=>{this.result=d})}goTo(t){l.BrowserService.open(t),function ee(n,e){"FirebasePlugin"in window&&window.FirebasePlugin.logEvent(n,e)}("addon_itunes",{type:this.movie?"movie":"tv-show"})}}return n.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275directiveInject(q))},n.\u0275cmp=o.\u0275\u0275defineComponent({type:n,selectors:[["wk-open-button"]],inputs:{movie:"movie",show:"show",episode:"episode",type:"type"},decls:2,vars:2,consts:[["color","light","expand","block","fill","outline","disabled","",4,"ngIf"],[4,"ngIf"],["color","light","expand","block","fill","outline","disabled",""],["class","container-button",3,"click",4,"ngIf"],[1,"container-button",3,"click"]],template:function(t,r){1&t&&(o.\u0275\u0275template(0,_e,4,3,"ion-button",0),o.\u0275\u0275template(1,we,3,2,"ng-container",1)),2&t&&(o.\u0275\u0275property("ngIf",r.loading),o.\u0275\u0275advance(1),o.\u0275\u0275property("ngIf",!r.loading))},dependencies:[i.NgIf,p.IonButton,p.IonText,I.TranslatePipe],styles:[".container-button[_ngcontent-%COMP%]{border:3px solid var(--ion-color-light);background-color:transparent;border-radius:5px;padding:10px 15px;text-align:center;font-size:.8em}.container-button[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-size:.8em}"]}),n})(),N=(()=>{class n extends l.MovieDetailBaseComponent{setMovie(t){this.movie=t}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.\u0275\u0275getInheritedFactory(n)))(r||n)}}(),n.\u0275cmp=o.\u0275\u0275defineComponent({type:n,selectors:[["ng-component"]],features:[o.\u0275\u0275InheritDefinitionFeature],decls:1,vars:1,consts:[[3,"movie"]],template:function(t,r){1&t&&o.\u0275\u0275element(0,"wk-open-button",0),2&t&&o.\u0275\u0275property("movie",r.movie)},dependencies:[C]}),n})(),H=(()=>{class n extends l.PluginBaseService{constructor(t){super(),this.translate=t}beforeMovieMiddleware(t){throw new Error("Method not implemented.")}afterMovieMiddleware(t){throw new Error("Method not implemented.")}beforeShowMiddleware(t){throw new Error("Method not implemented.")}afterShowMiddleware(t){throw new Error("Method not implemented.")}beforeEpisodeMiddleware(t,r){throw new Error("Method not implemented.")}afterEpisodeMiddleware(t,r){throw new Error("Method not implemented.")}fetchExplorerFolderItem(){throw new Error("Method not implemented.")}getFileActionButtons(t,r,s,c,d,b){throw new Error("Method not implemented.")}initialize(){E("plugin initialized")}afterInstall(){E("plugin installed")}afterUpdate(){E("plugin updated")}setTranslation(t,r){this.translate.setDefaultLang(t),this.translate.use(t),this.translate.setTranslation(t,r)}customAction(t,r){}}return n.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(I.TranslateService))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();var Se=u(951);let V=(()=>{class n extends l.EpisodeDetailBaseComponent{setShowEpisode(t,r){this.show=t,this.episode=r}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.\u0275\u0275getInheritedFactory(n)))(r||n)}}(),n.\u0275cmp=o.\u0275\u0275defineComponent({type:n,selectors:[["ng-component"]],features:[o.\u0275\u0275InheritDefinitionFeature],decls:1,vars:2,consts:[[3,"show","episode"]],template:function(t,r){1&t&&o.\u0275\u0275element(0,"wk-open-button",0),2&t&&o.\u0275\u0275property("show",r.show)("episode",r.episode)},dependencies:[C]}),n})(),L=(()=>{class n extends l.ShowDetailBaseComponent{setShow(t){this.show=t}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.\u0275\u0275getInheritedFactory(n)))(r||n)}}(),n.\u0275cmp=o.\u0275\u0275defineComponent({type:n,selectors:[["ng-component"]],features:[o.\u0275\u0275InheritDefinitionFeature],decls:1,vars:1,consts:[[3,"show"]],template:function(t,r){1&t&&o.\u0275\u0275element(0,"wk-open-button",0),2&t&&o.\u0275\u0275property("show",r.show)},dependencies:[C]}),n})(),Y=(()=>{class n extends l.PluginBaseModule{}return n.pluginService=H,n.movieComponent=N,n.episodeComponent=V,n.showComponent=L,n.\u0275fac=function(){let e;return function(r){return(e||(e=o.\u0275\u0275getInheritedFactory(n)))(r||n)}}(),n.\u0275mod=o.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=o.\u0275\u0275defineInjector({providers:[H,q],imports:[i.CommonModule,Se.FormsModule,p.IonicModule.forRoot(),I.TranslateModule.forRoot()]}),n})();const Ce=Y})(),P})());