import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {AppComponent} from './app.component';
import {ArticleComponent} from './components/article/article.component';
import {ArticlesListComponent} from './components/articles-list/articles-list.component';
import {FormCreateArticleComponent} from './components/form-create-article/form-create-article.component';
import {SimpleHttpComponent} from './components/simple-http/simple-http.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {YoutubeSearchComponent} from './components/youtube-search/youtube-search.component';
import {HttpRequestsComponent} from './components/http-requests/http-requests.component';
import {YouTubeService, youTubeServiceInjectable} from './services/youtube/you-tube.service';
import {CounterComponent} from './components/counter/counter.component';
import {APP_STORE} from "./app-store";
import {counterReducer} from "./reducers/CounterReducer";
import {AppState} from "./interfaces/app-state";
import {createStore, Store, StoreEnhancer} from "redux";
import { ChatComponent } from './components/chat/chat.component';

let devTools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;

export function store(): Store<AppState> {
  return createStore<AppState>(
    counterReducer,
    devTools
  );
}

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesListComponent,
    FormCreateArticleComponent,
    SimpleHttpComponent,
    SearchBoxComponent,
    SearchResultComponent,
    YoutubeSearchComponent,
    HttpRequestsComponent,
    CounterComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [YouTubeService, youTubeServiceInjectable,
    {provide: APP_STORE, useFactory: store}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
