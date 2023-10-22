import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[toggle]'
})
export class ToggleDirective {
  @Input() toggle: any;

  constructor(
    private viewRef: ViewContainerRef,
    private tempRef: TemplateRef<any>
  ) { }

  ngOnChanges() {
    if (this.toggle) {
      this.viewRef.createEmbeddedView(this.tempRef)
    } else {
      this.viewRef.clear();
    }
  }

}
