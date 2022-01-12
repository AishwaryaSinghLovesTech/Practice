import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product-dto';
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
    }))) 
    
  }


}
