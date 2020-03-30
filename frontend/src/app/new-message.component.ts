// 22/3/2020. Learnt from LinekdIn Learning

import { Component } from '@angular/core';
import { WebService } from './web.services';
import { AuthService } from './auth.service';


// Components always have a template
@Component({
    selector: 'new-message',
    template: `
        <mat-card class="card">
            <mat-card-content>
                <mat-form-field>
                    <textarea [(ngModel)]="message.text" matInput placeholder="Message"></textarea>
                </mat-form-field>
                <mat-card-actions>
                    <button (click)="post()" mat-button color="primary">POST</button>
                </mat-card-actions>
            </mat-card-content>
        </mat-card>
    `
})

export class NewMessageComponent {

    // Gives us access to our service
    constructor(private webService : WebService, private auth: AuthService) {}

    message = {
        owner: this.auth.name,
        text: ""
    }


    post() {
        this.webService.postMessage(this.message);
    }

}
