import { NgOptimizedImage } from '@angular/common'
import { Component, Inject, Optional } from '@angular/core'
import { SharedModule } from '../../shared.module'
import { IMovie, MovieToken } from '../movie.data'

@Component({
    selector: 'movie-with-optional-dependency',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss'],
    standalone: true,
    imports: [SharedModule, NgOptimizedImage],
})
export class MovieWithOptionalDependencyComponent {
    /**
     * A getter for the movie object,
     * so that we can't set it outside of  this component
     */
    get movie(): IMovie {
        return this._movie
    }

    constructor(@Inject(MovieToken) @Optional() private _movie: IMovie) {}
}
