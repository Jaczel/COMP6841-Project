// 22/3/2020. Learnt from LinekdIn Learning

import { Component } from '@angular/core';
import { WebService } from './web.services';


// Components always have a template
@Component({
    selector: 'messages',
    template: `
        <div *ngFor="let message of messages">
        <mat-card style="margin:8px">
            <mat-card-title>{{message.owner}}:</mat-card-title>
            <mat-card-content>{{message.text}}</mat-card-content>
        </mat-card>
        </div>
    `
})

export class MessagesComponent {
    // Gives us access to our service
    constructor(private webService: WebService) {}

    ngOnInit() {
        this.webService.getMessages();
    }

    messages = [{text:'Hi Kat', owner:'Joe'},
                {text:'Hi Joe', owner:'Kat'}];     
};
