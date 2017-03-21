import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Article} from "../article/article.model";
import {ArticlesList} from "./articles-list.model";

@Component({
  selector: 'app-articles-list',
  templateUrl: 'articles-list.component.html',
  styleUrls: ['articles-list.component.css'],
  host: {'class': 'block-of-information'}
})
export class ArticlesListComponent implements OnInit {
  @Input()
  articles: ArticlesList;
  @Output()
  onArticleSelected: EventEmitter<Article>;
  private currentArticle: Article;

  constructor() {
    this.onArticleSelected = new EventEmitter();
  }

  sortedArticles(): Article[] {
    return this.articles.sortedArticles();
  }

  clicked(article: Article): void {
    if (this.currentArticle == article) {
      this.currentArticle = null
    }
    else {
      this.currentArticle = article;
    }
    this.onArticleSelected.emit(article);
  }

  addArticle(article: Article) {
    this.articles.addArticle(article);
  }

  addArticles(arrayOfArticles: Article[]) {
    this.articles.addArticles(arrayOfArticles);
  }

  deleteArticle(article: Article) {
    this.articles.deleteArticle(article);
  }

  isSelected(article: Article): boolean {
    if (!article || !this.currentArticle) {
      return false;
    }
    return article.id === this.currentArticle.id;
  }

  ngOnInit() {
  }

}
