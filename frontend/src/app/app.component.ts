import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';

@Component({
  selector: 'app-root',
  template: '<h1>{{title}}</h1><messages></messages>',
})

export class AppComponent {
  title = 'Something Awesome Project';
}
