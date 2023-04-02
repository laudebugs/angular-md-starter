import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
    selector: '[movieHost]',
})
export class MovieHostDirective {
    constructor(private viewContainerRef: ViewContainerRef) {}
}
