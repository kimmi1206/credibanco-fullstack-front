import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  isPaymentProcess = false;
  messages: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  searchByText(event: any) {
    let keyword: string = event.target.value;
    this.productsComponent.filterProducts(keyword);
  }

  toggleShoppingCart() {
    this.isShoppingCartVisible = !this.isShoppingCartVisible;
  }

  async showToast(msg: string) {
    if (msg) {
      this.messages.push(
        this.isPaymentProcess ? 'Pago ' + msg : 'Producto ' + msg
      );
      await this.sleep(5000);
      let removedMsg = this.messages.shift();
    }
  }

  showPaymentForm(isPayment: string) {
    if (isPayment == 'true') this.isPaymentProcess = true;
  }

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
