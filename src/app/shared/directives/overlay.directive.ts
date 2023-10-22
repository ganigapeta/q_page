import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[overlay]'
})

export class OverlayDirective {
    @HostBinding('style.border') border = 'solid 1rem #000';
    @HostBinding('style.display') display: any;
    @HostListener('click', ['$event']) onClickOverlay (e: any) {
        this.border = 'solid 0 #000'
        this.display = 'none';
    }
    @HostListener('mouseover', ['$event']) 
    onMouseOver() {
        this.border = 'solid 1rem red'
    }

    @HostListener('mouseout', ['$event']) 
    onMouseOut() {
        this.border = 'solid 1rem #000'
    }

    @HostListener('window:resize', ['$event']) 
    onResize(e: any) {
        console.log(e);
    }
}