import { AfterContentInit, AfterViewInit, Component, ComponentRef, Injector, ViewChild, ViewContainerRef } from '@angular/core'
import { MovieHostDirective } from '../core/directives/movie-host.directive'
import { MovieComponent } from '../core/components/movie/movie.component'
import { IMovie, MOVIES, MovieToken } from '../core/components/movie.data'
import { MovieWithRequiredDependencyComponent } from '../core/components/movie/movie-with-required-dependency.component'
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, AfterContentInit {
    /* Look up the element containing the MoviehostDirective */
    @ViewChild(MovieHostDirective, { static: true, read: ViewContainerRef }) movieHost!: ViewContainerRef

    /* Look Up the template reference called TemplateRefAnchor */
    @ViewChild('TemplateRefAnchor', { static: true, read: ViewContainerRef }) templateRefAnchor!: ViewContainerRef

    /* Another template reference to use createOptions */
    @ViewChild('UsingCreateComponentOptionsAnchor', { static: true, read: ViewContainerRef })
    createComponentOptionsAnchor!: ViewContainerRef

    readonly movieList = MOVIES
    constructor(private hostContainerRef: ViewContainerRef, private parentInjector: Injector, private formBuilder: FormBuilder) {
        this.createForm()
    }

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

        /* Using the template reference as an anchor */
        this.useTemplateRefAsAnchor()
    }

    /**
     * Create a new component and attach it to the element containing the directive
     */
    useDirectiveAsAnchor(): void {
        const component = this.movieHost.createComponent(MovieComponent)
        component.instance.movie = MOVIES[0]
    }

    useTemplateRefAsAnchor(): void {
        const component = this.templateRefAnchor.createComponent(MovieComponent)
        component.instance.movie = MOVIES[1]
    }

    /**
     * Use host element as anchor for the component
     *
     * Note: This still throws the [`ExpressionChangedAfterItHasBeenCheckedError`](https://angular.io/errors/NG0100) error
     */
    useHostElementAsAnchor(): void {
        const component = this.hostContainerRef.createComponent(MovieComponent)
        component.instance.movie = MOVIES[2]
    }

    generateComponents() {
        /* We have to sort here and create the movies in order of index */
        const movies = this.createComponentsForm.controls.movies.getRawValue().sort((a, b) => a.index - b.index)
        /* First destroy all previously created components */
        this.dynamicallyCreatedComponents.forEach((component) => component.destroy())

        /* Create the dynamic components */
        movies.forEach(({ movie, index }) => {
            const injector = Injector.create({
                providers: [
                    {
                        provide: MovieToken,
                        useValue: movie,
                    },
                ],
                parent: this.parentInjector,
            })
            const component = this.createComponentOptionsAnchor.createComponent(MovieWithRequiredDependencyComponent, {
                injector,
                index,
            })
            this.dynamicallyCreatedComponents.push(component)
        })
    }

    private dynamicallyCreatedComponents: Array<ComponentRef<MovieWithRequiredDependencyComponent>> = []

    public createComponentsForm!: FormGroup<{ movies: FormArray<FormGroup<CreateMovieForm>> }>

    /**
     * Creates the movie form
     */
    createForm() {
        this.createComponentsForm = this.formBuilder.nonNullable.group<{ movies: FormArray<FormGroup<CreateMovieForm>> }>({
            movies: new FormArray([
                new FormGroup<CreateMovieForm>({
                    movie: this.formBuilder.nonNullable.control(MOVIES[0]),
                    index: this.formBuilder.nonNullable.control(0),
                }),
            ]),
        })
        this.createComponentsForm.controls.movies
    }

    /**
     * Adds a movie form to the list
     */
    addMovie() {
        this.createComponentsForm.controls.movies.push(
            new FormGroup<CreateMovieForm>({
                movie: this.formBuilder.nonNullable.control(
                    this.movieList[this.createComponentsForm.controls.movies.length + (1 % this.movieList.length) - 1],
                ),
                index: this.formBuilder.nonNullable.control(this.createComponentsForm.controls.movies.length - 1),
            }),
        )
    }

    /**
     *
     * @param index - the index of the movie to remove from the list
     */
    removeControl(index: number) {
        this.createComponentsForm.controls.movies.removeAt(index)
    }
}

type CreateMovieForm = { movie: FormControl<IMovie>; index: FormControl<number> }
