// 22/3/2020. Learnt from LinekdIn Learning

import { Component } from '@angular/core';
import { AuthService } from './auth.service';


// Components always have a template
@Component({
    selector: 'nav',
    template: `
        <mat-toolbar color="primary">
            <h1>Something Awesome Project</h1>
            <button mat-button routerLink="/">Message Board</button>
            <button mat-button routerLink="/messages">Messages</button>
            <span style="flex: 1 1 auto"></span>
            <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/login">Login</button>
            <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register">Register</button>
            <button *ngIf="auth.isAuthenticated" mat-button routerLink="/user">Welcome {{auth.name}}</button>
            <button *ngIf="auth.isAuthenticated" mat-button (click)="auth.logout()">Logout</button>
        </mat-toolbar>
    `
})

export class NavComponent {
    // Gives us access to our service
    constructor(public auth: AuthService) {}
}
