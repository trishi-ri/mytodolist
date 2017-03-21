import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css'],
  host: {'class': 'list-group-item'}
})
export class ArticleComponent implements OnInit {
  @Output()
  onDelete: EventEmitter<Article> = new EventEmitter<Article>();
  @Input()
  article: Article;
  @Input()
  selected: boolean;

  voteUp(event) {
    this.article.voteUp();
    event.stopPropagation();
  }

  voteDown(event) {
    this.article.voteDown();
    event.stopPropagation();
  }

  deleteArticle(event) {
    console.log(event);
    this.onDelete.emit(this.article);
    event.stopPropagation();
    // event.preventDefault();
  }


  ngOnInit() {
  }

}
