import { Directive, HostListener, ElementRef, Renderer , HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  constructor() { }
  
  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setElementStyle(this._elementRef.nativeElement, "background-color", "yellow")
    this.backGroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer.setElementStyle(this._elementRef.nativeElement, "background-color", "white")
    this.backGroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backGroundColor : string; 
}
