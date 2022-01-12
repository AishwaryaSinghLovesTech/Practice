import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationService } from './services/configuration.service';
import { PersistanceService } from './services/persistance.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[ PersistanceService, ConfigurationService]
})
export class SharedModule { }
