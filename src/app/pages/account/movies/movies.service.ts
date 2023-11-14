import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class MoviesService {
    constructor(
        private _http: HttpClient,
    ) {}

    getAll() {
        return this._http.get(`${environment.apiUrl}movies`);
    }

    create(body: any) {
        return this._http.post(`${environment.apiUrl}movie`, body);
    }

    update() {
        return this._http.put(`${environment.apiUrl}movies`, {});
    }

    delete() {
        return this._http.delete(`${environment.apiUrl}movies`, {});
    }

    imageUpload(file: any) {
        var fd = new FormData();
        fd.append('image', file);
        return this._http.post(`${environment.apiUrl}upload`, fd);
    }

    getImage(id: any): Observable<any> {
        return this._http.get(`${environment.apiUrl}image/${id}`);
    }
}