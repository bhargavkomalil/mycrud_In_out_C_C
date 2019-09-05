import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from './shared/employee.service';
import { DatashareComponent } from './datashare/datashare.component';
import { ChildComponent } from './child/child.component';
import { CompTocompComponent } from './comp-tocomp/comp-tocomp.component';
import { AppshadowDirective } from './appshadow.directive';
import { SamplePipePipe } from './sample-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    DatashareComponent,
    ChildComponent,
    CompTocompComponent,
    AppshadowDirective,
    SamplePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService,SamplePipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
