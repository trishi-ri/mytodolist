import {Article} from "../article/article.model";

export class ArticlesList {
  id: number;
  articles: Article[];

  constructor(id?: number) {
    this.id = id || 0;
    this.articles = [];
  }

  addArticle(article: Article) {
    while (this.thisIdWas(article.id)) {
      article.id += 1;
    }
    this.articles.push(article);
    console.log('Article was added: ', article);
  }

  addArticles(arrayOfArticles: Article[]) {
    for (let i in arrayOfArticles) {
      this.addArticle(arrayOfArticles[i]);
    }
  }

  deleteArticle(article: Article) {
    let index: number = this.articles.indexOf(article);
    if (index != -1) {
      this.articles.splice(index, 1);
      console.log('Article was deleted: ', article);
    }
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => (b.votes == a.votes ? a.id - b.id : b.votes - a.votes));
  }

  thisIdWas(id: number): boolean {
    for (let i in this.articles) {
      if (this.articles[i].id == id) {
        return true;
      }
    }
    return false;
  }
}
