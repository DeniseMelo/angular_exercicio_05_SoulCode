import { Directive,OnInit,HostBinding, ElementRef, Renderer2, } from '@angular/core';

@Directive({
  selector: '[appStyleBtn]'
})
export class StyleBtnDirective implements OnInit{

  @HostBinding('style.backgroundColor')
  BG1!: string  
  
  
  constructor(
    private elemento:ElementRef,
    private render:Renderer2) { 
      this.render.setStyle(this.elemento.nativeElement,'color','white')
      this.render.setStyle(this.elemento.nativeElement,'backgroud-color','red')
      console.log(this.elemento)
    }
    


 ngOnInit(): void {
   this.BG1 = "purple"
   
 } 
}
