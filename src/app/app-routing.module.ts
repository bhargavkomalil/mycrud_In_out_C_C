import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { DatashareComponent } from './datashare/datashare.component';
import { ChildComponent } from './child/child.component';
import { CompTocompComponent } from './comp-tocomp/comp-tocomp.component';
import { FileUpDownComponent } from './file-up-down/file-up-down.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: 'Create', component: EmployeesComponent, children: [
      { path: '', component: EmployeeCreateComponent }
    ]
  },
  {
    path: 'List', component: EmployeesComponent, children: [
      { path: '', component: EmployeeListComponent }
    ]
  },
  { path: 'Datashare', component: DatashareComponent },
  { path: 'child', component: ChildComponent },
  {path:'Comp_Comp',component:CompTocompComponent},
  {path:'FileUpDownload',component:FileUpDownComponent},
  {path:'productList',component:ProductListComponent},
  { path: "", redirectTo: "/List", pathMatch: "full" },

  // app-product-list
];
// 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
