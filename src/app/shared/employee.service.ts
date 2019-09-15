import { Injectable } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  modelData: Employee = {
    id: null,
    fullname: '',
    email: '',
    password: ''
  }

  list:Employee[];

  constructor(private http_: HttpClient) {
    // console.log("-------",this.modelData);
  }

  //data sharing component to component by services 
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message:any){
    this.messageSource.next(message)
  }
//-------------------------------------

  postemps(employee: Employee) {
    // debugger;
    return this.http_.post(environment.apiBaseUrl, employee)
  }
  getemps() {
    //MUST use 
    // .toPromise().then( data => this.list = data as Employee[])
    //  for auto REFRESH IN DISPLAY table
    
    return this.http_.get(environment.apiBaseUrl)
            .toPromise().then( data => this.list = data as Employee[]);

  }
  putemp(emp: Employee){
    // debugger;
    return this.http_.put(environment.apiBaseUrl + '/' + emp.id, emp);
  }
  deleteemp(emp){
    // debugger;
   return this.http_.delete(environment.apiBaseUrl +'/'+emp.id)
  }

  // prodetails:any;
  GetProducts() {
    // debugger;
  return this.http_.get(environment.apiProductUrl);
  }

}
