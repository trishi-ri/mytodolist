import {Component} from '@angular/core';
import {SearchResult} from "./search-result.model";

@Component({
  inputs: ['result'],
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  result: SearchResult;

}
