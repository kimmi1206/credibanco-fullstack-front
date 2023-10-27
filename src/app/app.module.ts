import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { AdministracionTarjetasModule } from './modules/administracion-tarjetas/administracion-tarjetas.module';
import { MarketplaceModule } from './modules/marketplace/marketplace.module';
import { NavbarComponent } from './layout/components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AdministracionTarjetasModule,
    MarketplaceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
