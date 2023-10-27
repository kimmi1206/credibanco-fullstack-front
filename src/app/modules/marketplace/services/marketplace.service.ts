import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarketplaceService {
  private apiUrl: string = `${environment.apiFakeStoreApiUrl}`;
  constructor(private http: HttpClient) {}

  getProductos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }
}
