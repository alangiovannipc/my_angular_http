import { Injectable } from '@angular/core';
import { NsWHttpService } from '../../../../libs/http/ns-w-http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListProductService {

  constructor(private _service:NsWHttpService) {
    console.log("constructor ListProductService");
   }

   getAll():Observable<any>{
    let url = "http://www.mocky.io/v2/5b4bf2003100003503a7de6c";
    return this._service.post(url,{});
   }
}
