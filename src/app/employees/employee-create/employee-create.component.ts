import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  constructor(private empservice_: EmployeeService,private router_:Router) { }

  ngOnInit() {
    this.onSubmit();  
    // console.log("modelcheck--", this.empservice_.modelData);
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.empservice_.modelData = {
      id: null,
      fullname: '',
      email:'',
      password:''
    }
  }

  onSubmit(form?:NgForm){
    if(form != null){
      if(form.value.id == null ){
        console.log("formValues--",form.value)
        this.empservice_.postemps(form.value).subscribe(res => {
          this.empservice_.getemps();
          this.resetForm();
          this.router_.navigateByUrl('/List');
        })
        
      }  
      else {
        console.log("formValues--",form.value);
        this.empservice_.putemp(form.value).subscribe(res => {
           
          this.resetForm();
          this.empservice_.getemps();
          this.router_.navigateByUrl('/List');
        })
        
      }
    };
    
  }

}
