import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

// @injectable allows us to inject content into our class
@Injectable()
export class WebService {
    // Constructor: inject in http will save a local reference
    // Angular we are specifying with typescript. Will be able to be
    // accessed using this.*

    BASE_URL = 'http://localhost:8000/api';

    constructor(private http: HttpClient) {}

    getMessages() {
        return this.http.get<Object[]>(this.BASE_URL + '/messages').toPromise();
    }

    postMessage(message) {
        return this.http.post(this.BASE_URL + '/message', message, {responseType: 'text'}).toPromise()
    }
}
