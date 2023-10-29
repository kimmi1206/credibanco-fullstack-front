import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { AdministracionTarjetasModule } from './modules/administracion-tarjetas/administracion-tarjetas.module';
import { MarketplaceModule } from './modules/marketplace/marketplace.module';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AdministracionTarjetasModule,
    MarketplaceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
