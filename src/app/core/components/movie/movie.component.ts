import { Component, Inject, InjectionToken, Optional } from '@angular/core'
import { IMovie, MovieToken } from '../movie.data'
import { SharedModule } from '../../shared.module'
import { NgOptimizedImage } from '@angular/common'

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss'],
    standalone: true,
    imports: [SharedModule, NgOptimizedImage],
})
export class MovieComponent {
    movie!: IMovie
    constructor(@Inject(MovieToken) @Optional() _movie: IMovie) {
        if (_movie) this.movie = _movie
    }
}
