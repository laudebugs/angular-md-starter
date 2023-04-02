import { NgModule } from '@angular/core'
import { MaterialModule } from './material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { MovieHostDirective } from './directives/movie-host.directive'

@NgModule({
    declarations: [MovieHostDirective],
    imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
    exports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule, MovieHostDirective],
})
export class SharedModule {}
