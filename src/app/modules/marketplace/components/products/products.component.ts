import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from '../../models/producto';
import { MarketplaceService } from '../../services/marketplace.service';
import { ProductsService } from '../../services/products.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { EventsEnum } from '../../enums/events';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productos: Producto[] = [];
  productosCache: Producto[] = [];

  constructor(
    private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.initializeProducts();
  }

  initializeProducts() {
    if (this.productosCache.length > 0)
      this.productos.length != this.productosCache.length &&
        (this.productos = this.productosCache.slice());
    else this.getProducts();
  }

  getProducts() {
    this.productsService.getProductos().subscribe((data: Producto[]) => {
      this.productos = data;
      this.productosCache = this.productos.slice(); // Memoización
    });
  }

  addProductToCart(producto: Producto) {
    if (producto) {
      if (!Object.hasOwn(producto, 'quantity')) producto.quantity = 1;
      this.shoppingCartService.addProductToShoppingCart(producto);
      this.shoppingCartService.notifyUpdate(EventsEnum.ADDED.PRODUCT);
    }
  }

  filterProducts(keyword: string) {
    this.initializeProducts();
    if (keyword.trim()) {
      let filteredProducts = this.productos.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
      this.productos = filteredProducts;
    }
  }
}
