import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.scss']
})
export class ChatroomWindowComponent implements OnInit {

  // TODO replace with Firebase data
  public dummyData = [
    {
      message: 'This is a text message for placehol',
      createdAt: new Date(),
      sender: {
        firstName: 'Steve',
        lastName: 'Smith',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    },
    {
      message: 'This is a text message for placehol 2',
      createdAt: new Date(),
      sender: {
        firstName: 'Steve 2',
        lastName: 'Smith 2',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    },
    {
      message: 'This is a text message for placehol 3',
      createdAt: new Date(),
      sender: {
        firstName: 'Steve 3',
        lastName: 'Smith 3',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    },
    {
      message: 'This is a text message for placehol 4',
      createdAt: new Date(),
      sender: {
        firstName: 'Steve 4',
        lastName: 'Smith 4',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
