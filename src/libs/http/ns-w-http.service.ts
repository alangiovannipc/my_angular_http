import { Injectable } from '@angular/core';
import { Http,Request,RequestMethod, Response } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NsWHttpService {

  constructor(private _http:Http) { }

  post(url,params): Observable<Response> {
    return this.request(url,RequestMethod.Post,params);
  }

  get(url,params): Observable<Response> {
    return this.request(url,RequestMethod.Get,params);
  }

  request(url,method,body): Observable<Response> {
    let request = new Request({
      url: url,
      method: method,
      body: body
    });
    
    return this._http.request(request);
  }
}
