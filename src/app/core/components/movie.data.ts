import { InjectionToken } from '@angular/core'

export interface IMovie {
    id: number
    title: string
    poster: string
    synopsis: string
    genres: Array<string>
    year: number
    director: string
    actors: Array<string>
    hours: Array<string>
}

export const MovieToken = new InjectionToken('movie')

export const MOVIES: IMovie[] = [
    {
        id: 1,
        title: 'The Shawshank Redemption',
        poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
        synopsis:
            'The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption.',
        genres: ['Crime', 'Drama'],
        year: 1994,
        director: 'Frank Darabont',
        actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton', 'William Sadler', 'Clancy Brown', 'Gil Bellows'],
        hours: ['Wednesday 19:30, 22:30', 'Thursday 19:30, 22:30', 'Friday 19:30, 22:30'],
    },
    {
        id: 2,
        title: 'The Godfather',
        poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        synopsis:
            'The story, spanning 1945 to 1955, chronicles the family under the patriarch Vito Corleone (Brando), focusing on the transformation of one of his sons, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss.',
        genres: ['Crime', 'Drama'],
        year: 1972,
        director: 'Francis Ford Coppola',
        actors: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Richard S. Castellano', 'Robert Duvall', 'Sterling Hayden'],
        hours: ['Wednesday 19:30, 22:30', 'Thursday 19:30, 22:30', 'Friday 19:30, 22:30'],
    },
    {
        id: 3,
        title: 'Cloud Atlas',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_FMjpg_UX1000_.jpg',
        synopsis:
            'The film consists of six interrelated and interwoven stories spanning different time periods. Cloud Atlas explores how the actions and consequences of individual lives impact one another throughout the past, the present and the future.',
        genres: ['Drama', 'Mystery', 'Sci-Fi'],
        year: 2012,
        director: 'Tom Tykwer, Lana Wachowski, Lilly Wachowski',
        actors: ['Tom Hanks', 'Halle Berry', 'Jim Broadbent', 'Hugo Weaving', 'Jim Sturgess', 'Doona Bae'],
        hours: ['Monday 19:30, 22:30', 'Tuesday 19:30, 22:30', 'Saturday 19:30, 22:30'],
    },
    {
        id: 4,
        title: 'Interstellar',
        poster: 'https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        synopsis:
            'Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
        genres: ['Adventure', 'Drama', 'Sci-Fi'],
        year: 2014,
        director: 'Christopher Nolan',
        actors: ['Ellen Burstyn', 'Matthew McConaughey', 'Mackenzie Foy', 'John Lithgow', 'Timothée Chalamet', 'David Oyelowo'],
        hours: ['Monday 19:30, 22:30', 'Wednesday 19:30, 22:30', 'Friday 19:30, 22:30'],
    },
    {
        id: 5,
        title: 'The Martian',
        poster: 'https://lumiere-a.akamaihd.net/v1/images/image_a119dd78.jpeg',
        synopsis:
            "The Martian, a 2011 novel by Andy Weir, served as the screenplay adapted by Drew Goddard. The film depicts an astronaut's (Matt Damon) lone struggle to survive on Mars after being left behind, and efforts to rescue him and bring him home to Earth.",
        genres: ['Adventure', 'Drama', 'Sci-Fi'],
        year: 2015,
        director: 'Ridley Scott',
        actors: ['Matt Damon', 'Jessica Chastain', 'Kristen Wiig', 'Jeff Daniels', 'Michael Peña', 'Sean Bean'],
        hours: ['Tuesday 19:30, 22:30', 'Thursday 19:30, 22:30', 'Saturday 19:30, 22:30'],
    },
    {
        id: 6,
        title: 'The Imitation Game',
        poster: 'https://m.media-amazon.com/images/M/MV5BNjI3NjY1Mjg3MV5BMl5BanBnXkFtZTgwMzk5MDQ3MjE@._V1_FMjpg_UX1000_.jpg',
        synopsis:
            'The Imitation Game is a 2014 American historical drama film directed by Morten Tyldum and written by Graham Moore, based on the biography Alan Turing: The Enigma by Andrew Hodges.',
        genres: ['Biography', 'Drama', 'Thriller'],
        year: 2014,
        director: 'Morten Tyldum',
        actors: ['Benedict Cumberbatch', 'Keira Knightley', 'Matthew Goode', 'Rory Kinnear', 'Allen Leech', 'Matthew Beard'],
        hours: ['Monday 19:30, 22:30', 'Wednesday 19:30, 22:30', 'Friday 19:30, 22:30'],
    },
]
