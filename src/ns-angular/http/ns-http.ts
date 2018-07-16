/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NsHttp {

  constructor() { }
}*/
/*---------------------------------------------------------------------------------------*/

import { Injectable } from "@angular/core";
import {
    Http,
    ConnectionBackend,
    Request,
    RequestOptions,
    RequestOptionsArgs,
    ResponseOptions,
    ResponseType,
    Response
} from "@angular/http";
import { Observable } from "rxjs";


@Injectable()
export class NsHttp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        console.log("contructor NsHttp");
        super(backend, defaultOptions);
    }

    /**
     * Performs a request with `request` http method.
     */
    request(req: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        console.log('NsHttp request');
        const urlString = typeof req === "string" ? req : req.url;
        return super.request(req, options);
        
    }
}

