import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appRepositoryHighlight]'
})
export class RepositoryHighlightDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.background= 'turquoise'
  }

}
