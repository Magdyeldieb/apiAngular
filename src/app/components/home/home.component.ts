import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { error } from 'console';
import { Product } from '../../core/interface/iproduct';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  productsData:Product []=[];

  constructor (private _ProductsService:ProductsService){}

 ngOnInit(): void {
     this._ProductsService.getAllProducts().subscribe({
      next:(res)=>{
        console.log(res);

        this.productsData = res;
        },
        error:(err)=> {
            console.log(err);
        },

      })
 }
}

