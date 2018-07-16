import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProductService } from './list-product/list-product.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListProductComponent],
  providers: [ListProductService],
  exports:[ListProductComponent]
})
export class ProductModule { }
