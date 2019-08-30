import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  
  constructor(private Service_:EmployeeService) { }

  // from service comp to comp data sharing
  message:any;

  ngOnInit() {
    this.Service_.getemps();
    this.Service_.currentMessage.subscribe(message => this.message = message);
  }
  emp:any;
  changeNewMessage(emp){
    // this.Service_.changeMessage("hello from empolyees")
    this.Service_.changeMessage(emp)
    
  }

}
