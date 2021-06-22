import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { Paging } from 'src/app/models/paging';
import { ProductPaginData } from 'src/app/models/product-pagin-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = localStorage.getItem('ServerUrl');
  //url = localStorage.clear();
  //url = localStorage.removeItem('ServerUrl');
  //url = "http://localhost:8080/";
  constructor(private http: HttpClient) { }

  geProductByDepartmentId(paging: Paging): Observable<Product[]>{
    return this.http.post<Product[]>(`${this.url}department/getDepartments`, paging);
  }

  getProductList(paging: Paging): Observable<ProductPaginData> {
    return this.http.post<ProductPaginData>(`${this.url}product/getFilteredProducts`, { paging: paging });
  }

  getProductDetailsById(productId: number):Observable<Product> {
    return this.http.get<Product>(`${this.url}product/getProductDetails?productId=${productId}`);
  }

}
