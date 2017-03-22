import {Component} from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css'],
  host: {'class': 'block-of-information'}
})
export class SimpleHttpComponent {

  data: Object;
  loading: boolean;

  constructor(private http: Http) {

  }

  makeRequest(): void {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

}
