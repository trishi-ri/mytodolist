import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ArticleComponent} from './components/article/article.component';
import {ArticlesListComponent} from './components/articles-list/articles-list.component';
import {FormCreateArticleComponent} from './components/form-create-article/form-create-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesListComponent,
    FormCreateArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
