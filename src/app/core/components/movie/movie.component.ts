import { NgOptimizedImage } from '@angular/common'
import { Component } from '@angular/core'
import { SharedModule } from '../../shared.module'
import { IMovie } from '../movie.data'

@Component({
    selector: 'movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss'],
    standalone: true,
    imports: [SharedModule, NgOptimizedImage],
})
export class MovieComponent {
    movie!: IMovie
}
