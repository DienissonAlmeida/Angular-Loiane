import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }

  @HostListener('mouseenter') onMouseOver() {
    this.backGroundColor = this.appHighlight;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backGroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backGroundColor : string = 'grey'; 

  @Input() defaultColor: string = 'white';
  @Input('appHighlight') appHighlight: string = 'yellow';

}
