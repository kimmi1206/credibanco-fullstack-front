import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketHomeComponent } from './components/market-home/market-home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [MarketHomeComponent, ShoppingCartComponent, ProductsComponent],
  imports: [CommonModule],
  exports: [MarketHomeComponent],
})
export class MarketplaceModule {}
