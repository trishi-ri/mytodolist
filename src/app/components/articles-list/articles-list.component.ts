import { Component, OnInit, EventEmitter } from '@angular/core';
import {Article} from "../article/article.model";

@Component({
  selector: 'app-articles-list',
  inputs: ['articlesList'],
  outputs: ['onArticleSelected'],
  templateUrl: 'articles-list.component.html',
  styleUrls: ['articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles: Article[];
  onArticleSelected: EventEmitter<Article>;
  private currentArticle: Article;

  constructor() {
    this.onArticleSelected = new EventEmitter();
  }

  sortedArticles(currentArticles: Article[]) : Article[] {
    return currentArticles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  clicked(article: Article): void{
    this.currentArticle = article;
    this.onArticleSelected.emit(article);
  }

  isSelected(article: Article) :boolean{
    if (!article || !this.currentArticle){
      return false;
    }
    return article.id === this.currentArticle.id;
  }

  ngOnInit() {
  }

}
