# Dynamic Components in Angular

> A repository to demonstrate the use of dynamic components in Angular

[Read referenced article here](https://www.laudebugs.me/dev/dynamic-components-angular)

## Glossary

### `ViewContainerRef`

A reference to the container where one or more views can be attached.
[Reference](https://angular.io/api/core/ViewContainerRef)

### `@ViewChild`

A property decorator that configures a view query.
[Reference](https://angular.io/api/core/ViewChild)

## Directives

### `movieHost`

Directive to anchor where to host the dynamic component.

```ts
import { Directive, ViewContainerRef } from '@angular/core'

@Directive({ selector: '[movieHost]' })
export class MovieHostDirective {
    constructor(private viewContainerRef: ViewContainerRef) {}
}
```
