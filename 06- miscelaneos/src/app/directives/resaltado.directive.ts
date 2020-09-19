import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log('directiva llamada' );
   }

   @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEntro(): void
  {
    this.resaltar( this.nuevoColor || 'yellow');
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseSalio(): void
  {
    this.resaltar(null);
  }

  private resaltar( color: string ): void
  {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
