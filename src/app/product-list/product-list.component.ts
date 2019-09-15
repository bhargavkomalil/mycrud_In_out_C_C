import { Component, OnInit } from '@angular/core';

// import { ProductListService } from '../product-list.service';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService_: EmployeeService, private router_: Router) { }

  ngOnInit() {
    // this.productService_.GetProducts();
    this.getProd();
  };

  BrandNameDetails: any;
  getProd() {
    this.productService_.GetProducts().subscribe(
      (data) => {
        this.BrandNameDetails = data
        // console.log("productData--",this.BrandNameDetails);

      }
    );
  };

  b_products:any;
  brandname: any;
  brandtype: any;
  product_details:any;
  brandProducts(value) {

    console.log("brandproducts--", this.BrandNameDetails);
    console.log('value_select', value);
    this.brandname = value;

    this.BrandNameDetails.forEach(element => {
      // console.log('ele__', element)
      if (element.BrandName == value) {

        this.b_products = element.BrandProducts;
        console.log('aboutselect___',this.b_products)

      }
    })
  };

  Producttypes(value) {
    console.log('pronames___v__', value);
    this.brandtype = value;

    this.router_.navigate(['/productList'], { queryParams: { BrandName: this.brandname, productType:   this.brandtype } })
    
    var count = 0;
    this.b_products.forEach(productType_ => {


      // if( productType_.ProductType == this.brandtype ){
        if(count == this.brandtype){
          console.log('--',count,'--',productType_)
          this.product_details = productType_;
          
        }
        count++

        // console.log('pronames---',productType_,'---',count)
        // console.log('---',productType_)
        // this.product_details = productType_;
        
      // }

    });


  }


};

// function myfunc(mydata){

//   mydata.forEach(element => {
//     console.log('out of foreach_ script',element)
//       // if(element.BrandName ===){

//       // }

//   });
// }
