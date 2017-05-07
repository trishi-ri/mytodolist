import {Component, Inject, OnInit} from '@angular/core';
import {AppState} from "../../reducers/index";
import {Store} from "redux";
import {APP_STORE} from "../../app-store";
import ChatExampleData from "./ChatExampleData";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  host: {'class': 'block-of-information'}
})
export class ChatComponent implements OnInit {

  today: number = Date.now();

  constructor(@Inject(APP_STORE) private store: Store<AppState>) {
    ChatExampleData(store);
  }

  ngOnInit() {
  }

}
