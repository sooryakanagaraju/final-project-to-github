import { Directive,Input,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appScrolright]'
})
export class ScrolrightDirective {

  @Input() appScrolright:any;

  constructor(private el:ElementRef) {
      //'<h1 [scroll]="30"></h1>
   }

   @HostListener("click") 
   onClick():void{
       
       let temp=this.el.nativeElement.parentNode;
       console.log(temp);
        temp=temp.children[3];
       temp.scrollTo({ left: (temp.scrollLeft + this.appScrolright), behavior: 'smooth' });
       
       console.log(temp);
       console.log();
   }

}
