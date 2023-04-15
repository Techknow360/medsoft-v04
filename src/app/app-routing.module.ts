import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/base/notfound/notfound.component';
import { UndermaintenanceComponent } from './shared/base/undermaintenance/undermaintenance.component';
import { LoginComponent } from './shared/login/login.component';
import { BillingComponent } from './view/billing/billing.component';
import { CustomersComponent } from './view/customers/customers.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { PaymentsComponent } from './view/payments/payments.component';
import { ProductitemsComponent } from './view/products/productitems/productitems.component';
import { ProductsComponent } from './view/products/products.component';
import { ProfileComponent } from './view/profile/profile.component';
import { ReportsComponent } from './view/reports/reports.component';
import { SettingsComponent } from './view/settings/settings.component';
import { UsersComponent } from './view/users/users.component';
import { VendorsComponent } from './view/vendors/vendors.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : '',
    component : ViewComponent,
    children : [
      {
        path : 'users',
        component : UsersComponent
      },
      {
        path : 'dashboard',
        component : DashboardComponent
      },
      {
        path : 'vendors',
        component :  VendorsComponent
      },
      {
        path : 'customers',
        component : CustomersComponent
      },
      {
        path :  'bill',
        component : BillingComponent
      },
      {
        path : 'products',
        component : ProductsComponent
      },
      {
        path : 'productitems',
        component : ProductitemsComponent
      },
      {
        path : 'reports',
        component : ReportsComponent
      },
      {
        path : 'payments',
        component : PaymentsComponent
      },
      {
        path : 'setting',
        component : SettingsComponent
      },
      {
        path : 'profile',
        component : ProfileComponent
      }
    ]
  },
  {
    path : 'login',
    component : LoginComponent
  },{
    path  :'**',
    component : NotfoundComponent
  },
  {
    path : 'notfound',
    component : NotfoundComponent
  },
  {
    path : 'undermaintenance',
    component : UndermaintenanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
