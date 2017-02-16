import {Component} from '@angular/core';
import {Article} from "./components/article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(){
    this.articles = [
      new Article(0, 'start page', 'https://trishi-ri.github.io', 0),
      new Article(1, 'test Tib', 'https://trishi-ri.github.io/testtib/', 1),
      new Article(2, 'test Tib new', 'https://trishi-ri.github.io/testtib-new/', 4),
      new Article(3, 'my todo-list', 'https://github.com/trishi-ri/MyToDoList', 8)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    const newIndex: number = this.articles.length;
    console.log(`Adding article #${newIndex} title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(newIndex, title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }

  articleWasSelected(article: Article): void{
    console.log('Article clicked: ', article);
  }

}
