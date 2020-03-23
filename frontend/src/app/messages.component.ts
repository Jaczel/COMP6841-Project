// 22/3/2020. Learnt from LinekdIn Learning

import { Component } from '@angular/core';
import { WebService } from './web.services';


// Components always have a template
@Component({
    selector: 'messages',
    template: `
    <div *ngFor="let message of webService.messages">
        <mat-card style="card">
            <mat-card-title>{{message.owner}}:</mat-card-title>
            <mat-card-content>{{message.text}}</mat-card-content>
        </mat-card>
    </div>
    `
})

export class MessagesComponent {
    // Gives us access to our service
    constructor(public webService : WebService) {}
};
