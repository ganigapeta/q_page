import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(
        private http: HttpClient
    ) {}

    setAuth(val: any) {
        localStorage.setItem('userInfo', JSON.stringify(val));
    }

    getUserInfo() {
        return JSON.parse(localStorage.getItem('userInfo')!);
    }

    login(): Observable<any> {
        return this.http.post('http://localhost:3000/user/login', {
            username: 'kishore',
            password: 'kishore'
        }).pipe(
            tap((res: any) => {
                this.setAuth(res);
            })
        );
    }

    logout() {
        localStorage.removeItem('userInfo');
    }
}