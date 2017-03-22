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
import { HttpRequestsComponent } from './components/http-requests/http-requests.component';
import {YouTubeService, youTubeServiceInjectable} from './services/youtube/you-tube.service';

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
    HttpRequestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [YouTubeService, youTubeServiceInjectable],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
