import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ViewChild,
    ViewContainerRef,
} from '@angular/core'
import { MovieHostDirective } from '../core/directives/movie-host.directive'
import { MovieComponent } from '../core/components/movie/movie.component'
import { MOVIES } from '../core/components/movie.data'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, AfterContentInit {
    /* Look up the element containing the MoviehostDirective */
    @ViewChild(MovieHostDirective, { static: true, read: ViewContainerRef }) movieHost!: ViewContainerRef

    constructor(private hostContainerRef: ViewContainerRef) {}

    /**
     * Note: Avoid directly modifying a components data directly here
     * as it will not trigger change detection and will result in the error
     * [NG0100: ExpressionChangedAfterItHasBeenCheckedError](https://angular.io/errors/NG0100)
     */
    ngAfterViewInit(): void {}

    /**
     * For components which we are modifying the data directly,
     * we can use this life cycle hook to create the component
     * So that Angular can detect the changes and update the view
     */
    ngAfterContentInit(): void {
        /* Using the host component as an anchor */
        this.useHostElementAsAnchor()

        /* Using the directive as an anchor */
        this.useDirectiveAsAnchor()
    }
    ngAfterContentChecked(): void {}

    /**
     * Create a new component and attach it to the element containing the directive
     */
    useDirectiveAsAnchor(): void {
        const component = this.movieHost.createComponent(MovieComponent)
        component.instance.movie = MOVIES[1]
    }

    /**
     * Use host element as anchor for the component
     * Note: This still throws the ExpressionChangedAfterItHasBeenCheckedError error
     */
    useHostElementAsAnchor(): void {
        const component = this.hostContainerRef.createComponent(MovieComponent)
        component.instance.movie = MOVIES[0]
    }
}
