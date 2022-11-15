import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {

  public productsService: any = [];

  constructor(private products: ProductsService){
    this.products.getproductsService().subscribe(
      (data:any) => {
        this.productsService= data;
      },
      (error: any) => {
        alert('internal server error');
      }
    )
       
  }

  public product: any=[];

  save(product:any){
    this.product=product;
  }

  ngOnInit(): void {
  }

  catch(value:any){
    alert(value);
    this.productsService.shift();
    this.product={}
  }

}
