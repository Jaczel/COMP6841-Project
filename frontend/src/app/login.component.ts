import { Component } from '@angular/core';
import { AuthService } from './auth.service';


// Components always have a template
@Component({
    selector: 'login',
    template: `
        <mat-card>
            <mat-form-field>
                <input matInput [(ngModel)]="loginData.email" placeholder="Email" type="email">
            </mat-form-field>
            <mat-form-field>
                <input matInput [(ngModel)]="loginData.password" placeholder="Password" type="password">
            </mat-form-field>
            <button mat-raised-button color="primary"(click)="login()">Login</button> 
        </mat-card>
    `
})

export class LoginComponent {
    // Gives us access to our service
    constructor(public auth: AuthService) {}
    loginData = {
        email: '',
        password: ''
    }

    login() {
        this.auth.login(this.loginData)
    }
}
