// 22/3/2020. Learnt from LinekdIn Learning

import { Component } from '@angular/core';
import { WebService } from './web.services';
// Gives us access to the route parameters
import { ActivatedRoute } from '@angular/router';


// Components always have a template
@Component({
    selector: 'messages',
    template: `
    <div *ngFor="let message of webService.messages | async">
        <mat-card style="card">
            <mat-card-title [routerLink]="['/messages', message.owner]" style="cursor: pointer">{{message.owner}}:</mat-card-title>
            <mat-card-content>{{message.text}}</mat-card-content>
        </mat-card>
    </div>
    `
})

export class MessagesComponent {
    // Gives us access to our service
    constructor(public webService : WebService, private route: ActivatedRoute) {}

    ngOnInit(){
        // Pretty bloated, but just do it
        var name = this.route.snapshot.params.name;
        this.webService.getMessages(name);
        this.webService.getUser().subscribe();
    }
};
