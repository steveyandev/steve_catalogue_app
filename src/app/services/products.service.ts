import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {environment} from "../../environments/environment";

@Injectable({providedIn:"root"})
export class ProductsService{
  constructor(private http:HttpClient) {
  }
  getAllProducts(){
    let host=environment.host;
    return this.http.get(host+"/product");
  }
}
