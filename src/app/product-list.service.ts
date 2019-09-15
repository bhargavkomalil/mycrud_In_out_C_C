import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private htt_:HttpClient) { }


  getProduct(){
    // debugger;
   return this.htt_.get(environment.apiProductUrl);
  }
}
