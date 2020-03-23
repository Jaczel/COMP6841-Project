import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { MatSnackBar } from '@angular/material/snack-bar';

// @injectable allows us to inject content into our class
@Injectable()
export class WebService {
    // Constructor: inject in http will save a local reference
    // Angular we are specifying with typescript. Will be able to be
    // accessed using this.*

    BASE_URL = 'http://localhost:8000/api';

    messages = [];

    constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
        this.getMessages();
    }

    async getMessages() {
        try {
            var response = await this.http.get<Object[]>(this.BASE_URL + '/messages').toPromise();
            this.messages = response;
        } catch (error) {
            this.handleError("Unable to get messages");
        }
    }

    async postMessage(message) {
        try { 
            var response = await this.http.
                           post(this.BASE_URL + '/message',
                                message,
                                {responseType: 'text'}).toPromise()
            this.messages.push(response);
        } catch (error) {
            this.handleError("Unable to get messages");
        }
    }

    private handleError(error) {
        console.error(error);
        this._snackBar.open(error, 'close', {duration: 2000});
    }
}
