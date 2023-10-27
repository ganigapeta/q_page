import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";
import { BehaviorSubject, Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    userInfo$ = new BehaviorSubject(null);
    constructor(
        private http: HttpClient,
        private _router: Router
    ) {}

    setUserInfoSub() {
        this.userInfo$.next(this.getUserInfoStorage());
    }

    setUserInfoStorage(val: any) {
        localStorage.setItem('userInfo', JSON.stringify(val));
    }

    getUserInfoStorage() {
        return JSON.parse(localStorage.getItem('userInfo')!);
    }

    login(): Observable<any> {
        return this.http.post('http://localhost:3000/user/login', {
            username: 'kishore',
            password: 'kishore'
        }).pipe(
            tap((res: any) => {
                this.setUserInfoStorage(res);
                this.setUserInfoSub();
            })
        );
    }

    logout() {
        localStorage.removeItem('userInfo');
        this._router.navigate(['/toggle']);
        this.setUserInfoSub();
    }
}