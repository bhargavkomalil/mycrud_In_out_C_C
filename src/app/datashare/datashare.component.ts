import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';


@Component({
  selector: 'app-datashare',
  templateUrl: './datashare.component.html',
  styleUrls: ['./datashare.component.css']
})
export class DatashareComponent implements OnInit {

  parentMessage = "message from parent";
  constructor(private empService_:EmployeeService) { }

  ngOnInit() {
    // to avoid refresh problem
    this.empService_.getemps();
    console.log('datash--',this.empService_.list)
  }

  // @Output data from child to parent through $event recived from child

  toparentside:any;

  toparent($event){
    this.toparentside=$event;
    console.log(this.toparentside,'---inside aprent')
  }
// ---------------

// @Input from parent to child send from parent 

  details:any;

  onSelect(employee){
    this.details=employee;
    console.log('details--',this.details)
  }

// ---------------------
}
