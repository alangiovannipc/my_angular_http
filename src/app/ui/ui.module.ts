import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from './product/product.module';
import { NsWHttpService } from '../../libs/http/ns-w-http.service';

@NgModule({
  imports: [
    CommonModule,
    ProductModule
  ],
  declarations: [],
  providers: [{provide:NsWHttpService,useClass:NsWHttpService}],
  exports:[ProductModule]
})
export class UiModule { }
