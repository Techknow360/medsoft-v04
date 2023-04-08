import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/base/notfound/notfound.component';
import { UndermaintenanceComponent } from './shared/base/undermaintenance/undermaintenance.component';
import { LoginComponent } from './shared/login/login.component';
import { UsersComponent } from './view/users/users.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : '',
    component : ViewComponent,
    children : [
      {
        path : 'users',
        component : UsersComponent
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
