import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';

@Component({
  selector: 'app-root',
  template: `
        <h1>Something Awesome Message Board</h1>
        <new-message (onPosted)="onPosted($event)"></new-message>
        <messages></messages>
    `,
})

export class AppComponent {

    
    // : MessageComponent (specifies the type) 
    @ViewChild(MessagesComponent) messages : MessagesComponent;

    onPosted(message) {
        this.messages.messages.push(message);
    }
}
