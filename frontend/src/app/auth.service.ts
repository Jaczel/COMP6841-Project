import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

// Dealing with the new way that HttpClient works
// Need to create an interface (model)
interface User {
    token: string;
    firstName: string;
}

@Injectable()
export class AuthService {
    BASE_URL = 'http://' + 'localhost' + ':8080/auth';
    NAME_KEY = 'name';
    TOKEN_KEY = 'token';
    constructor(private http: HttpClient, private router: Router) {}

    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }

    get isAuthenticated() {
        // Double negative makes it a True/False rather than just the value
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    get tokenHeader() {
        return new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem(this.TOKEN_KEY));
    }

    login(loginData) {
        this.http.post<User>(this.BASE_URL + '/login', loginData).subscribe(res => {
            this.authenticate(res);
        })
    }

    // register(user) {
    //     // Going with using an Observable with subscribe instead of async await
    //     // However, async await would work too.
    //     delete user.confirmPassword;
    //     this.http.post<User>(this.BASE_URL + '/register', user).subscribe(res => {
    //         this.authenticate(res);
    //     });
    // }

    logout() {
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
    }

    authenticate(res) {
        var authResponse = res;

        if(!authResponse.token){
            return;
        }
        localStorage.setItem(this.TOKEN_KEY, authResponse.token)
        localStorage.setItem(this.NAME_KEY, authResponse.firstName)
        this.router.navigate(['/']);
    }
}
