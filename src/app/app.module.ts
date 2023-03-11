import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableComponent } from './shared/core/datatable/datatable.component';
import { FormvalidationComponent } from './shared/core/formvalidation/formvalidation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { TopheaderComponent } from './shared/topheader/topheader.component';
import { UndermaintenanceComponent } from './shared/undermaintenance/undermaintenance.component';
import { ViewModule } from './view/view.module';
import { LoginComponent } from './shared/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopheaderComponent,
    FooterComponent,
    NotfoundComponent,
    UndermaintenanceComponent,
    DatatableComponent,
    FormvalidationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
