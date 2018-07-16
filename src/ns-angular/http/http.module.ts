/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class HttpModule { }*/
import { NgModule } from "@angular/core";
import { Http, XHRBackend, RequestOptions, HttpModule } from "@angular/http";

import { NsHttp } from "./ns-http";

export { NsHttp } from "./ns-http";

export function nsHttpFactory(backend, options) {
    return new NsHttp(backend, options);
}


@NgModule({
    providers: [
        {
            provide: Http, useFactory: nsHttpFactory,
            deps: [XHRBackend, RequestOptions]
        }
    ],
    imports: [
        HttpModule,
    ],
    exports: [
        HttpModule,
    ]
})
export class NsAngularHttpModule {
}
