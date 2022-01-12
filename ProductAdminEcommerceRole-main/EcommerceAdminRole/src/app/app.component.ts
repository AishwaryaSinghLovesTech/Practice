import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './shared/services/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EcommerceAdminRole';
  constructor(public _configService:ConfigurationService){
    this._configService.activateConfigSettings()
  }
  ngOnInit(): void {
      
  }
}
