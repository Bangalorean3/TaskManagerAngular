import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
//import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductLoadingPageService {

  constructor(private http:HttpClient) { }

  getDataMobile(){
    return this.http.get("http://localhost:3000/plp")
  }
}
