import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css'],
})
export class CrearTarjetaComponent implements OnInit {
  currentDate: Date = new Date(Date.now());

  numeroTarjeta: number = this.getRandomInt(9999999999999999);
  titularCuenta: string = '';
  fechaVencimiento: string = new Date(Date.now()).toLocaleDateString();
  tipoTarjeta: string = '';
  saldo: number = 0.0;

  isRecarga: boolean = false;

  constructor() {}
  ngOnInit(): void {
    this.numeroTarjeta = this.getRandomInt(9999999999999999);
    this.titularCuenta = '';
    this.fechaVencimiento = new Date(Date.now()).toLocaleDateString();
    this.tipoTarjeta = '';
    this.saldo = 0.0;
  }

  crearTarjeta() {
    let validExpirationDate =
      this.currentDate.getMonth() +
      1 +
      '/' +
      (this.currentDate.getFullYear() + 3);
    let nuevaTarjet = {
      NumeroTarjeta: this.numeroTarjeta,
      TitularCuenta: this.titularCuenta,
      FechaVencimiento: this.fechaVencimiento,
      TipoTarjeta: this.tipoTarjeta,
      Saldo: this.saldo,
    };
    console.log(nuevaTarjet);
  }

  showRecargarForm() {
    this.isRecarga = !this.isRecarga;
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
