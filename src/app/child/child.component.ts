import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() atchild;
  @Output() fromchild = new EventEmitter<any>();

  constructor(private empService_: EmployeeService) { }

  ngOnInit() {
    this.empService_.getemps();
  }

  //For data passing through "@Output From child(child component) to parent (datashare component)"

  onedetail: any;

  datapassFromChild(emp) {
    this.onedetail = emp;
    console.log(this.onedetail, '---outputted_data')
  }

  fromchildmethod() {
    this.fromchild.emit(this.onedetail);
    console.log(this.onedetail, '---outputObj')

  }

  // @Output upto here send a clicking object from child to parent like click event 
}
