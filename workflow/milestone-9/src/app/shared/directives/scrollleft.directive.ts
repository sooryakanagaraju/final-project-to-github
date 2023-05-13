import { Directive,Input,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollleft]'
})
export class ScrollleftDirective {

  @Input() appScrollleft:any;
  constructor(private el:ElementRef) {
      //'<h1 [scroll]="30"></h1>
   }

   @HostListener("click") 
   onClick():void{
       
       let temp=this.el.nativeElement.parentNode;
       console.log(temp);
        temp=temp.children[3];
       temp.scrollTo({ left: (temp.scrollLeft - this.appScrollleft), behavior: 'smooth' });
       
       console.log(temp);
       console.log();
   }

}
