import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmartFormComponent } from '../shared/core/components/smart-form/smart-form.component';
import { SmartValidationComponent } from '../shared/core/components/smart-validation/smart-validation.component';
import { SmartTableComponent } from '../shared/core/components/smart-table/smart-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmarterrormessageDirective } from '../shared/core/directives/smarterrormessage.directive';
import { SmartmandatoryDirective } from '../shared/core/directives/smartmandatory.directive';
import { SmartuppercaseDirective } from '../shared/core/directives/smartuppercase.directive';
import { SmartallowonlyDirective } from '../shared/core/directives/smartallowonly.directive';
import { SmartinputborderDirective } from '../shared/core/directives/smartinputborder.directive';
import { SmartChartComponent } from '../shared/core/components/smart-chart/smart-chart.component';
import { SmartDashboardCardsComponent } from '../shared/core/components/smart-dashboard-cards/smart-dashboard-cards.component';
import { VendorsComponent } from './vendors/vendors.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SmarttableshortDirective } from '../shared/core/directives/smarttableshort.directive';
import { NgbModalConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VendorformComponent } from './vendors/vendorform/vendorform.component';
import { UsersformComponent } from './users/usersform/usersform.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerformComponent } from './customers/customerform/customerform.component';
import { BillingComponent } from './billing/billing.component';
import { BillformComponent } from './billing/billform/billform.component';
import { SmartautoheightDirective } from '../shared/core/directives/smartautoheight.directive';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductsComponent } from './products/products.component';
import { ProductformComponent } from './products/productform/productform.component';



@NgModule({
  declarations: [
    UsersComponent,
    DashboardComponent,
    SmartFormComponent,
    SmartValidationComponent,
    SmartTableComponent,
    SmartChartComponent,
    SmartDashboardCardsComponent,
    VendorsComponent,
    VendorformComponent,
    UsersformComponent,
    CustomersComponent,
    CustomerformComponent,
    BillingComponent,
    BillformComponent,
    SmarterrormessageDirective,
    SmartmandatoryDirective,
    SmartuppercaseDirective,
    SmartallowonlyDirective,
    SmartinputborderDirective,
    SmarttableshortDirective,
    SmartautoheightDirective,
    ProductsComponent,
    ProductformComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    TabsModule.forRoot()
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers :[DatePipe,NgbModalConfig],
  exports : [SmartFormComponent,SmartValidationComponent,SmartTableComponent,SmarterrormessageDirective,SmartmandatoryDirective]
})
export class ViewModule { }
