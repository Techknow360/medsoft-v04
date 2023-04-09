import { NgModule } from '@angular/core';
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
import { SidenavComponent } from '../shared/base/sidenav/sidenav.component';
import { SmartChartComponent } from '../shared/core/components/smart-chart/smart-chart.component';
import { SmartDashboardCardsComponent } from '../shared/core/components/smart-dashboard-cards/smart-dashboard-cards.component';
import { VendorsComponent } from './vendors/vendors.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SmarttableshortDirective } from '../shared/core/directives/smarttableshort.directive';
import { NgbModalConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VendorformComponent } from './vendors/vendorform/vendorform.component';
import { UsersformComponent } from './users/usersform/usersform.component';

@NgModule({
  declarations: [
    UsersComponent,
    DashboardComponent,
    SmartFormComponent,
    SmartValidationComponent,
    SmartTableComponent,
    SmartChartComponent,
    SmartDashboardCardsComponent,
    SmarterrormessageDirective,
    SmartmandatoryDirective,
    SmartuppercaseDirective,
    SmartallowonlyDirective,
    SmartinputborderDirective,
    SmarttableshortDirective,
    VendorsComponent,
    VendorformComponent,
    UsersformComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule
    
  ],
  providers :[DatePipe,NgbModalConfig],
  exports : [SmartFormComponent,SmartValidationComponent,SmartTableComponent,SmarterrormessageDirective,SmartmandatoryDirective]
})
export class ViewModule { }
