// 22/3/2020. Learnt from LinekdIn Learning

import { Component } from '@angular/core';


// Components always have a template
@Component({
    selector: 'nav',
    template: `
        <mat-toolbar color="primary">
            <h1>Something Awesome Project</h1>
            <button mat-button routerLink="/">Message Board</button>
            <button mat-button routerLink="/messages">Messages</button>
        </mat-toolbar>
    `
})

export class NavComponent {
    // Gives us access to our service
    constructor() {}
}
