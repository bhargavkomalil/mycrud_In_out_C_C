import { Directive,ElementRef,Renderer2,Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAppshadow]',
  // templateUrl: './appshadow.directive.html',
  // styleUrls: ['./appDhadow.component.css']
})
export class AppshadowDirective implements OnInit {

  // @Input() appShadow: string;
  // @Input() appShadowX: string;
  // @Input() appShadowY: string;
  // @Input() appShadowBlur: string;

  constructor(private elementRef_:ElementRef,private renderer2_:Renderer2) {}

    // renderer2_.setStyle(elementRef_.nativeElement,'box-shadow', '2px 2px 12px #58A362');

ngOnInit(){
    // let shadowStr = `${ this.appShadowX } ${ this.appShadowY } ${ this.appShadowBlur } ${ this.appShadow }`;
    //   this.renderer2_.setStyle(this.elementRef_.nativeElement, 'box-shadow', shadowStr);
      this.elementRef_.nativeElement.style.color = 'blue';
    }

}
