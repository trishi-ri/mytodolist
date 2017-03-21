import {Component} from '@angular/core';
import {Article} from "./components/article/article.model";
import {ArticlesList} from "./components/articles-list/articles-list.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: ArticlesList;

  constructor() {
    this.articles = new ArticlesList;
    this.articles.addArticles([
      new Article('start page', 'https://trishi-ri.github.io'),
      new Article('my todo-list', 'https://github.com/trishi-ri/MyToDoList')
    ]);
  }

  addArticle(newArticle: { [key: string]: string }): boolean {
    console.log(`Adding article with title: ${newArticle['title']} and link: ${newArticle['link']}`);
    this.articles.addArticle(new Article(newArticle['title'], newArticle['link']));
    return false;
  }

  articleWasSelected(article: Article): void {
    console.log('Article clicked: ', article);
  }

}
