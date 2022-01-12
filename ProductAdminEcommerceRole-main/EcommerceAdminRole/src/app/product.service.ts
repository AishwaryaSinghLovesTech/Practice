import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product, productdto } from './product-dto';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { ConfigurationService } from './shared/services/configuration.service';
import { PersistanceService } from './shared/services/persistance.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productList:Product[]=[];
  public productOptions:Product[]=[];
  constructor( private http: HttpClient, public _persistanceService  : PersistanceService) {




   }

  getProductList(){
    let url = this._persistanceService.get("productUrl");
    let req   
    req = this.http.get(url)
    
    return req.pipe((map(response=>{
      let res:any = response
      return res;
    }))) . subscribe(data=>{
      let productList = data.slice(0,25);
      let productOptionsList = data.slice(26,500);
      productList.forEach((element:any)=> {
       this.productList.push(new productdto(element))
      });
      productOptionsList.forEach((element:any)=> {
        this.productOptions.push(new productdto(element))
       });
       console.log(this.productList, this.productOptions)
    }) 
    
  }


}
