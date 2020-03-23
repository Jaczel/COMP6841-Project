// 22/3/2020. Learnt from LinekdIn Learning

import { Component } from '@angular/core';
import { WebService } from './web.services';


// Components always have a template
@Component({
    selector: 'new-message',
    template: `
        <mat-card class="card">
            <mat-card-content>
                <mat-form-field>
                    <input matInput placeholder="Name">
                </mat-form-field>
                <mat-form-field>
                    <textarea matInput placeholder="Message"></textarea>
                </mat-form-field>
                <mat-card-actions>
                    <button mat-button color="primary">POST</button>
                </mat-card-actions>
            </mat-card-content>
        </mat-card>

    `
})

export class NewMessageComponent {
    // Gives us access to our service
    constructor(private webService : WebService) {}

}
