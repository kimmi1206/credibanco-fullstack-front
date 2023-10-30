import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { AdministracionTarjetasModule } from './modules/administracion-tarjetas/administracion-tarjetas.module';
import { MarketplaceModule } from './modules/marketplace/marketplace.module';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdministrarTarjetasComponent } from './modules/administracion-tarjetas/components/administrar-tarjetas/administrar-tarjetas.component';
import { MarketHomeComponent } from './modules/marketplace/components/market-home/market-home.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AdministracionTarjetasModule,
    MarketplaceModule,
    RouterModule.forRoot([
      {
        path: 'marketplace',
        title: 'Marketplace',
        component: MarketHomeComponent,
      },
      {
        path: 'tarjetas',
        title: 'Administrar Tarjetas',
        component: AdministrarTarjetasComponent,
      },
      { path: '', component: MarketHomeComponent },
      { path: '**', component: MarketHomeComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
