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
import { NgbDateParserFormatter, NgbModalConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { ProductitemsComponent } from './products/productitems/productitems.component';
import { ProductitemformComponent } from './products/productitems/productitemform/productitemform.component';
import { ReportsComponent } from './reports/reports.component';
import { CustomdateformatService } from '../api-services/common/customdateformat.service';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentformComponent } from './payments/paymentform/paymentform.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { WebcamModule } from 'ngx-webcam';
import { UploadComponent } from '../shared/upload/upload.component';
import { CameraComponent } from '../shared/upload/camera/camera.component';
import { ImageCropperComponent } from '../shared/upload/image-cropper/image-cropper.component';
import { ConstantComponent } from './constant/constant.component';
import { ConstformComponent } from './constant/constform/constform.component';


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
    ProductsComponent,
    ProductformComponent,
    ProductitemsComponent,
    ProductitemformComponent,
    ReportsComponent,
    ProfileComponent,
    SettingsComponent,
    PaymentsComponent,
    PaymentformComponent,
    UploadComponent,
    CameraComponent,
    ImageCropperComponent,
    SmarterrormessageDirective,
    SmartmandatoryDirective,
    SmartuppercaseDirective,
    SmartallowonlyDirective,
    SmartinputborderDirective,
    SmarttableshortDirective,
    SmartautoheightDirective,
    ConstantComponent,
    ConstformComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ImageCropperModule,
    WebcamModule,
    ToastrModule.forRoot(),
    TabsModule.forRoot()
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers :[DatePipe,NgbModalConfig,{provide: NgbDateParserFormatter, useClass: CustomdateformatService}],
  exports : [SmartFormComponent,SmartValidationComponent,SmartTableComponent,SmarterrormessageDirective,SmartmandatoryDirective]
})
export class ViewModule { }
