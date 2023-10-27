import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrarTarjetasComponent } from './components/administrar-tarjetas/administrar-tarjetas.component';
import { CrearTarjetaComponent } from './components/administrar-tarjetas/crear-tarjeta/crear-tarjeta.component';
import { RecargarTarjetaComponent } from './components/administrar-tarjetas/recargar-tarjeta/recargar-tarjeta.component';

@NgModule({
  declarations: [
    AdministrarTarjetasComponent,
    CrearTarjetaComponent,
    RecargarTarjetaComponent,
  ],
  imports: [CommonModule],
  exports: [AdministrarTarjetasComponent],
})
export class AdministracionTarjetasModule {}
