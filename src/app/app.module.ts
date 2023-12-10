import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminTableComponent } from './view/admin-table/admin-table.component';
import { CustomerComponent } from './view/customer/customer.component';
import { FactoryTableComponent } from './view/factory-table/factory-table.component';
import { LoginComponent } from './view/login/login.component';
import { LogisticsTableComponent } from './view/logistics-table/logistics-table.component';
import { ProductListComponent } from './view/product-list/product-list.component';
import { SalesTableComponent } from './view/sales-table/sales-table.component';
import { SidenavComponent } from './view/sidenav/sidenav.component';
import { WarehouseTableComponent } from './view/warehouse-table/warehouse-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    ProductListComponent,
    SidenavComponent,
    SalesTableComponent,
    FactoryTableComponent,
    WarehouseTableComponent,
    LogisticsTableComponent,
    AdminTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
