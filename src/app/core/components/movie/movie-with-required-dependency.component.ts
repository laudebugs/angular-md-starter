import { NgOptimizedImage } from '@angular/common'
import { Component, Inject } from '@angular/core'
import { SharedModule } from '../../shared.module'
import { IMovie, MovieToken } from '../movie.data'

@Component({
    selector: 'movie-with-required-dependency',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss'],
    standalone: true,
    imports: [SharedModule, NgOptimizedImage],
})
export class MovieWithRequiredDependencyComponent {
    /**
     * In this component, the movie is required as a dependency.
     * If the dependency is not provided, the component will throw the error:
     * "No provider for InjectionToken MovieToken"
     */
    constructor(@Inject(MovieToken) public movie: IMovie) {}
}
