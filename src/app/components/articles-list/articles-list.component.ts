import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Article} from "../article/article.model";

@Component({
  selector: 'app-articles-list',
  templateUrl: 'articles-list.component.html',
  styleUrls: ['articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  @Input()
  articles: Article[];
  @Output()
  onArticleSelected: EventEmitter<Article>;
  private currentArticle: Article;

  constructor() {
    this.onArticleSelected = new EventEmitter();
  }

  sortedArticles(currentArticles: Article[]): Article[] {
    return currentArticles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  clicked(article: Article): void {
    this.currentArticle = article;
    this.onArticleSelected.emit(article);
  }

  deleteArticle(article: Article) {
    let index: number = this.articles.indexOf(article);
    if (index != -1) {
      this.articles.splice(index, 1);
      console.log('Article was deleted: ', article);
    }
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
