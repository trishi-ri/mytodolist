export class Article {
  id: number;
  title: string;
  link: string;
  votes: number;

  constructor(id: number, title: string, link: string, votes?: number) {
    this.id = id;
    this.votes = votes || 0;
    this.title = title;
    this.link = link;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  domain(): string {
    try {
      const link: string = this.link.split('//')[1];
      return link.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
