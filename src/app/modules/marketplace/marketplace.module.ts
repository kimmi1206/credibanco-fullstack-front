import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketHomeComponent } from './components/market-home/market-home.component';

@NgModule({
  declarations: [MarketHomeComponent],
  imports: [CommonModule],
  exports: [MarketHomeComponent],
})
export class MarketplaceModule {}
