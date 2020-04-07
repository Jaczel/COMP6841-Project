import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

// @injectable allows us to inject content into our class
@Injectable()
export class WebService {
    // Constructor: inject in http will save a local reference
    // Angular we are specifying with typescript. Will be able to be
    // accessed using this.*

    BASE_URL = 'http://' + environment.hostEnvironment + ':8080/api';

    private messageStore = [];

    private messageSubject = new Subject();

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    }

    // Create an observable out of the messageSubject
    messages = this.messageSubject.asObservable();

    constructor(private http: HttpClient, private _snackBar: MatSnackBar, private auth: AuthService) {
        this.getMessages(null);
    }

    getMessages(user) {
        // If user is not valid use an empty character
        user = (user) ? '/' + user : '';
        // Subscribing to the 'Observable'. Allows us to listen for a post
        this.http.get<Object[]>(this.BASE_URL + '/messages' + user).subscribe(response => {
            // Response handling code
            this.messageStore = response;
            // Can observe our message component (allows for updates to messages)
            this.messageSubject.next(this.messageStore);
        }, error => {
            this.handleError("Unable to get messages");
        });
    }

    async postMessage(message) {
        try {
            var response = await this.http.post(this.BASE_URL + '/messages',
                                                message, this.httpOptions).toPromise();
            this.messageStore.push(response);
            this.messageSubject.next(this.messageStore);
        } catch (error) {
            this.handleError("Unable to post message");
        }
    }

    getUser() {
        return this.http.get(this.BASE_URL + '/users/me', {headers: this.auth.tokenHeader});
    }

    saveUser(userData) {
        return this.http.post(this.BASE_URL + '/users/me', userData, {headers: this.auth.tokenHeader});
    }

    private handleError(error) {
        console.error(error);
        this._snackBar.open(error, 'close', {duration: 2000});
    }
}
