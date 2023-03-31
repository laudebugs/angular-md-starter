import { NgModule } from '@angular/core'
import { MaterialModule } from './material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@NgModule({
    declarations: [],
    imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
    exports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
})
export class SharedModule {}
