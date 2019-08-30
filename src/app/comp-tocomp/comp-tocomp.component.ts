import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-comp-tocomp',
  templateUrl: './comp-tocomp.component.html',
  styleUrls: ['./comp-tocomp.component.css']
})
export class CompTocompComponent implements OnInit {

  constructor(private Service_:EmployeeService) { }
  
  //this is form service about BehavirolSubject--------
  message:any;
  
  ngOnInit() {
    this.Service_.currentMessage.subscribe(message =>this.message = message);
  }
// ----------------------------------------------------


}
