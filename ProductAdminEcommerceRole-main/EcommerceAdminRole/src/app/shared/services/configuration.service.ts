import { Injectable } from '@angular/core';
import { PersistanceService } from './persistance.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  env = "test"
  constructor(public _persistance:PersistanceService) { 

   
  }

   activateConfigSettings(env?:String)
   {
    this._persistance.set("productUrl","assets/mock-json/products.json")

     
   }
}
