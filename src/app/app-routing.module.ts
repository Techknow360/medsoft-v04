import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/base/notfound/notfound.component';
import { UndermaintenanceComponent } from './shared/base/undermaintenance/undermaintenance.component';
import { LoginComponent } from './shared/login/login.component';
import { CustomersComponent } from './view/customers/customers.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
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
