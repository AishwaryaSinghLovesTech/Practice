import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ConfigurationService } from './shared/services/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EcommerceAdminRole';
  constructor(public _configService: ConfigurationService, public _productService: ProductService) {
    this._configService.activateConfigSettings()
    this._productService.getProductList();
  }
  ngOnInit(): void {

  }
}
