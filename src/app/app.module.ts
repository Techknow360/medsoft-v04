import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';
import { LoginComponent } from './shared/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewComponent } from './view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './shared/base/sidenav/sidenav.component';
import { FooterComponent } from './shared/base/footer/footer.component';
import { TopheaderComponent } from './shared/base/topheader/topheader.component';
import { NotfoundComponent } from './shared/base/notfound/notfound.component';
import { SmartpasswordvisibleDirective } from './shared/core/directives/smartpasswordvisible.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './api-services/core/interceptor.service';
import { SmartapiService } from './api-services/smartapi.service';
import { ApiEndpointsService } from './api-services/core/api-endpoints.service';
import { SpinnerInterceptorService } from './api-services/core/spinner.interceptor.service';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewComponent,
    SidenavComponent,
    FooterComponent,
    TopheaderComponent,
    NotfoundComponent,
    SmartpasswordvisibleDirective,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ViewModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [ 
    {provide: HTTP_INTERCEPTORS,useClass: InterceptorService,multi: true},
    {provide: HTTP_INTERCEPTORS,useClass: SpinnerInterceptorService,multi: true },
    SmartapiService,ApiEndpointsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
