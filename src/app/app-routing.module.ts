import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { UndermaintenanceComponent } from './shared/undermaintenance/undermaintenance.component';

const routes: Routes = [
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
