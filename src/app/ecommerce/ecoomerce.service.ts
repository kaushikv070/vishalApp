import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  private REST_API_SERVER = "https://fakestoreapi.com/products?limit=40";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER).pipe(

      timeout(5000),
      catchError(e =>{

        return this.httpClient.get("./assets/items.json");
      })
    )
  }
}