import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";


import { FileSelectDirective, FileUploader } from 'ng2-file-upload'

@Component({
  selector: 'app-file-up-down',
  templateUrl: './file-up-down.component.html',
  styleUrls: ['./file-up-down.component.css']
})
export class FileUpDownComponent implements OnInit {


  File_Uri = "http://localhost:3000/files";

  uploader: FileUploader = new FileUploader({ url: this.File_Uri });
  attachmentList: any = [];

  constructor(    private  route_: ActivatedRoute, private  router_: Router,) {
    this.uploader.onCompleteItem = (item: any, resionse: any, satus: any, header: any)=>{
      this.attachmentList.push(JSON.parse(resionse))
      console.log('attList__',this.attachmentList);
      // this.attachmentList = [];
    }
  }
  sampleItem(item){
    console.log('itemfor Download',item)
  }
  download(index){
  var filename = this.attachmentList[index].uploadname
  }

  subscribeParams:any;
  ngOnInit() {
  
    this.route_.paramMap.subscribe(params =>{
      this.subscribeParams = params.get("productType_");
      console.log("subscribe____params---",this.subscribeParams)
    })
  }



}
