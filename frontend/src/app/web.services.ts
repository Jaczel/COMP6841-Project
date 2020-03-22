import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// @injectable allows us to inject content into our class
@Injectable()
export class WebService {
    // Constructor: inject in http will save a local reference
    // Angular we are specifying with typescript. Will be able to be
    // accessed using this.*
    constructor(private http: HttpClient) {}

    getMessages() {
            return this.http.get('http://localhost:8000/messages').toPromise();
    }
}
