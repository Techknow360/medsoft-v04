import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports : [SmartFormComponent,SmartValidationComponent,SmartTableComponent,SmarterrormessageDirective,SmartmandatoryDirective]
})
export class ViewModule { }
