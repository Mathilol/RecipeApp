import {Directive, ElementRef, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
@HostBinding('class.open') open: boolean = false;

  constructor(elRef: ElementRef) {}

  @HostListener('click') toggleOpen() {
    this.open = !this.open;
  }

}
