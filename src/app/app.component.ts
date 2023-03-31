import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    #collapsed = JSON.parse(localStorage.getItem('collapsed') ?? 'true')

    get collapsed(): boolean {
        return this.#collapsed
    }
    set collapsed(value: boolean) {
        this.#collapsed = value
        localStorage.setItem('collapsed', JSON.stringify(value))
    }

    toggleCollapse(): void {
        this.collapsed = !this.collapsed
    }
}
