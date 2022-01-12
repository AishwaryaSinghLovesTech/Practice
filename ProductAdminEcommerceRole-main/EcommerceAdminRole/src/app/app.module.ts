import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ModalComponent } from './modal/modal.component';
import { ProductService } from './product.service';
import { PersistanceService } from './shared/services/persistance.service';
import { ConfigurationService } from './shared/services/configuration.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductAdminComponent,
    ProductDetailsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
