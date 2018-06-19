import {Http, Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/toPromise";
import "rxjs/Rx";
import {Observable} from "rxjs";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/throw";

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  post(url: string, body: any): Observable<any> {
    return this.http.post(url, body)
        // .map(res => res.json());
  }
}
