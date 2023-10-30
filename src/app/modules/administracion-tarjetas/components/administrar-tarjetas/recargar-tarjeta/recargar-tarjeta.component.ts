import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recargar-tarjeta',
  templateUrl: './recargar-tarjeta.component.html',
  styleUrls: ['./recargar-tarjeta.component.css'],
})
export class RecargarTarjetaComponent implements OnInit {
  saldo: number = 0.0;
  constructor() {}
  ngOnInit(): void {}

  recargarSaldo() {
    console.log('Recarga realizada de ', this.saldo);
  }
}
