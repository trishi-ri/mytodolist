import {Component} from '@angular/core';
import {SearchResult} from "../search-result/search-result.model";

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css'],
  host: {'class': 'block-of-information'}
})
export class YoutubeSearchComponent {
  results: SearchResult[];
  loadingGif: string = ((<any>window).__karma__) ? '' : require('../../../assets/images/loading.gif');

  updateResults(results: SearchResult[]): void {
    this.results = results;
    // console.log("results:", this.results); // uncomment to take a look
  }

}
