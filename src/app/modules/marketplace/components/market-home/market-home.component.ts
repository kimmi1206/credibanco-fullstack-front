import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { MarketplaceService } from '../../services/marketplace.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-market-home',
  templateUrl: './market-home.component.html',
  styleUrls: ['./market-home.component.css'],
})
export class MarketHomeComponent implements OnInit {
  productos: Producto[] = [];
  productosCache: Producto[] = [];
  disabled = true;
  slideIndex = 1;
  constructor(
    private marketplaceService: MarketplaceService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  searchByText(event: any) {
    let keyword: string = event.target.value;
    this.productos = this.productosCache;
    if (keyword) {
      let filteredProducts = this.productos.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
      this.productos = filteredProducts;
    }
  }

  addProductToCart(producto: Producto) {
    console.log('producto', producto);
  }

  getProducts() {
    this.marketplaceService.getProductos().subscribe((data) => {
      this.productos = data;
      this.productosCache = data;
    });
  }
}
