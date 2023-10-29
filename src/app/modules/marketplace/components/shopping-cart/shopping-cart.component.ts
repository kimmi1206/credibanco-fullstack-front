import { Component, OnDestroy, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { EventsEnum } from '../../enums/events';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  productosCompra: Producto[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.getShoppingCart();
    this.subscription = this.shoppingCartService.notifyObservable$.subscribe(
      (message) => {
        if (message == EventsEnum.ADDED.PRODUCT) this.getShoppingCart();
      }
    );
  }

  getShoppingCart() {
    this.productosCompra = this.shoppingCartService.getShoppingCartProducts();
    console.log(this.productosCompra);
  }

  removeFromShoppingCart(producto: Producto) {
    if (this.shoppingCartService.removeFromShoppingCart(producto)) {
      this.getShoppingCart();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
