import { Component, OnInit } from '@angular/core';
import { ListProductService } from './list-product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public products;

  constructor(private _service:ListProductService) { }

  ngOnInit() {
    console.log("NgOnInit ListProductComponent");
    this._service.getAll().subscribe((response:Response)=>{
      console.log("response");
      console.log(response);
      console.log("json");
      console.log(response.json());
      this.products = response.json();
    })
  }

}
