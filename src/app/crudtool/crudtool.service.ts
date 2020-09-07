import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { ICrudDataModel } from "./ICrudDataModel";


@Injectable({
    providedIn: 'root'
})
export class CrudService {
    private sourceUrl = 'api/crudtools/crudtools.json';

    constructor(private http: HttpClient){

    }
    getCrudServices(): Observable <ICrudDataModel[]> {
        return this.http.get<ICrudDataModel[]>(this.sourceUrl)
            .pipe(
                tap(data => console.log('All: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return throwError(err);
    }
}