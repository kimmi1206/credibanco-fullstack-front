import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Producto } from '../../models/producto';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { EnumTypes } from '../../enums/events';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  productosCompra: Producto[] = [];

  @Output() transmittedMessage: EventEmitter<string> = new EventEmitter();
  @Output() paymentEvent: EventEmitter<string> = new EventEmitter();

  private subscription: Subscription = new Subscription();

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.getShoppingCart();
    this.subscription = this.shoppingCartService.notifyObservable$.subscribe(
      (message) => {
        if (message == EnumTypes.PRODUCT.ADDED) this.getShoppingCart();
      }
    );
  }

  getShoppingCart() {
    this.productosCompra = this.shoppingCartService.getShoppingCartProducts();
  }

  removeFromShoppingCart(producto: Producto) {
    if (this.shoppingCartService.removeFromShoppingCart(producto)) {
      this.getShoppingCart();
      this.transmittedMessage.emit(EnumTypes.PRODUCT.REMOVED);
    }
  }

  startPaymentProcess() {
    this.paymentEvent.emit('true');
    this.transmittedMessage.emit(EnumTypes.PAYMENT.CREATED);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
