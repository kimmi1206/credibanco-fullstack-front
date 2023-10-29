import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { MarketplaceService } from '../../services/marketplace.service';
import { Producto } from '../../models/producto';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-market-home',
  templateUrl: './market-home.component.html',
  styleUrls: ['./market-home.component.css'],
})
export class MarketHomeComponent implements OnInit {
  @ViewChild(ProductsComponent) productsComponent!: ProductsComponent;

  isShoppingCartVisible = false;

  constructor() {}

  ngOnInit(): void {
    console.log(' ');
  }

  searchByText(event: any) {
    let keyword: string = event.target.value;
    this.productsComponent.filterProducts(keyword);
  }

  showShoppingCart() {
    this.isShoppingCartVisible = !this.isShoppingCartVisible;
  }
}
