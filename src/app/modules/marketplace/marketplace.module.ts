import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketHomeComponent } from './components/market-home/market-home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/products/products.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MarketHomeComponent,
    ShoppingCartComponent,
    ProductsComponent,
    PaymentComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [MarketHomeComponent],
})
export class MarketplaceModule {}
