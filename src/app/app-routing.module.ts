import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { CustomerComponent } from './view/customer/customer.component';
import { ProductListComponent } from './view/product-list/product-list.component';
import { SalesTableComponent } from './view/sales-table/sales-table.component';
import { FactoryTableComponent } from './view/factory-table/factory-table.component';
import { WarehouseTableComponent } from './view/warehouse-table/warehouse-table.component';
import { LogisticsTableComponent } from './view/logistics-table/logistics-table.component';
import { AdminTableComponent } from './view/admin-table/admin-table.component';
import { SidenavComponent } from './view/sidenav/sidenav.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'preorder',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'preorder',
    component: CustomerComponent,
  },
  {
    path: 'preorder/:id',
    component: CustomerComponent,
  },
  {
    path: 'order-items',
    component: ProductListComponent,
  },
  {
    path: 'update-order/:id',
    component: ProductListComponent,
  },
  {
    path: 'sales',
    component: SalesTableComponent,
  },
  {
    path: 'factory',
    component: FactoryTableComponent,
  },
  {
    path: 'warehouse',
    component: WarehouseTableComponent,
  },
  {
    path: 'logistics',
    component: LogisticsTableComponent,
  },
  {
    path: 'admin',
    component: AdminTableComponent,
  }, {
    path: 'sidenav',
    component: SidenavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
