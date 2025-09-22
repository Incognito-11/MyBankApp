import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  @HostBinding('class.scrolled')isScrolled=false;
  @HostListener('window.scroll',[])
  onScroll(){
    this.isScrolled=window.scrollY>50
  }

  constructor() { }

}
