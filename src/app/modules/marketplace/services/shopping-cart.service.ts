import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private apiUrl: string = `${environment.apiFakeStoreApiUrl}`;
  private static productosShoppingCart: Map<number, Producto> = new Map();

  private notify = new Subject<any>();

  notifyObservable$ = this.notify.asObservable();

  constructor(private http: HttpClient) {}

  public notifyUpdate(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }

  getShoppingCartProducts(): Producto[] {
    return Array.from(ShoppingCartService.productosShoppingCart.values());
  }

  addProductToShoppingCart(producto: Producto) {
    if (producto?.id) {
      if (ShoppingCartService.productosShoppingCart.has(producto.id)) {
        let product = ShoppingCartService.productosShoppingCart.get(
          producto.id
        );
        if (product) {
          producto.quantity = product.quantity += 1;
        }
      }
      ShoppingCartService.productosShoppingCart.set(producto.id, producto);
    }
  }

  removeFromShoppingCart(producto: Producto): boolean {
    if (
      producto?.id &&
      ShoppingCartService.productosShoppingCart.has(producto.id)
    ) {
      if (producto.quantity > 1) {
        producto.quantity -= 1;
        ShoppingCartService.productosShoppingCart.set(producto.id, producto);
      } else {
        ShoppingCartService.productosShoppingCart.delete(producto.id);
      }
      console.log(ShoppingCartService.productosShoppingCart);
      return true;
    }
    return false;
  }
}
