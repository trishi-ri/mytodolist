import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  host: {'class': 'block-of-information'}
})
export class ChatComponent implements OnInit {

  today: number = Date.now();

  constructor() {

  }

  ngOnInit() {
  }

}
