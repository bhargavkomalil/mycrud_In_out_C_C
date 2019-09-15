import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router'
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import {SamplePipePipe} from '../../sample-pipe.pipe';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeslist;
  constructor(
    private empService_:EmployeeService,
    private router_:Router,
    private captPipe_:SamplePipePipe
    
    ) {
    // this.getempslist();  
   }
   
    ngOnInit() {
    
    this.empService_.getemps();
    this.getempslist();
  
  }
  getempslist(){
// debugger;
    // this.empService_.getemps().subscribe((data:Employee[]) => {
    //   this.employeeslist = data;
    //   console.log('getdetails----',this.employeeslist)      
    //  })
     
  };

  onEdit(employee:Employee){
    console.log("edit--",employee);
    this.empService_.modelData = employee;
    // this.empService_.getemps();
    this.router_.navigateByUrl('/Create');
  };

  onDelete(emp){
    console.log("Delete",emp)
    this.empService_.deleteemp(emp).subscribe( res => {
    
      this.empService_.getemps();
    
    });
    // this.empService_.getemps();
  };
  // ObjData:any;
  // samplePipecall(pipeobj){
  //   console.log('list_pipe',pipeobj)
  //   // debugger;

  //   this.ObjData = this.captPipe_.transform(pipeobj);
  //   console.log('OjbData',this.ObjData) 
  // }
}
