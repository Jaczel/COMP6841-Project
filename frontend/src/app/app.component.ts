import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';

@Component({
  selector: 'app-root',
  template: `
        <h1>{{title}} Message Board</h1>
        <new-message></new-message>
        <messages></messages>
    `,
})

export class AppComponent {
  title = 'Something Awesome Project';
}
