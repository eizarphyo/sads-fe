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
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PermitDialogComponent } from './view/permit-dialog/permit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio'
import { MatCheckboxModule } from '@angular/material/checkbox';

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
    AdminTableComponent,
    PermitDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule
    ,
  ],
  providers: [
    provideAnimations(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
