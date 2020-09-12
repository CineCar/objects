import { MovieScreening } from "./MovieScreening";

export class Movie {
    private id: number;
    private name: string;
    private duration: number;
    private price: number;
    private imageUrl: string;

    private movieScreenings: Array<MovieScreening>;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getDuration(): number {
        return this.duration;
    }

    public setDuration(duration: number): void {
        this.duration = duration;
    }

    public getMovieScreenings(): Array<MovieScreening> {
        return this.movieScreenings;
    }

    public setMovieScreenings(movieScreening: Array<MovieScreening>): void {
        this.movieScreenings = movieScreening;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getImageUrl(): string {
        return this.imageUrl;
    }

    public setImageUrl(imageUrl: string): void {
        this.imageUrl = imageUrl;
    }

    public toJSON(parent: boolean = false): any {
        const movieScreenings = [];

        if (this.movieScreenings && parent) {
            this.movieScreenings.forEach((movieScreening: MovieScreening) => {
                movieScreenings.push(movieScreening.toJSON());
            });
        }

        return {
            id: this.id,
            name: this.name,
            duration: this.duration,
            price: this.price,
            imageUrl: this.imageUrl,
            movieScreenings: movieScreenings,
        };
    }

    public static fromJSON(json): Movie {
        const movie: Movie = new Movie();
        movie.setId(json.id);
        movie.setName(json.name);
        movie.setDuration(json.duration);
        movie.setPrice(json.price);
        movie.setImageUrl(json.imageUrl);

        const movieScreenings: Array<MovieScreening> = [];

        if (json.movieScreenings) {
            json.movieScreenings.forEach((jsonMovieScreening) => {
                const movieScreening: MovieScreening = MovieScreening.fromJSON(jsonMovieScreening);
                movieScreening.setMovie(movie);
                movieScreenings.push(movieScreening);
            });
        }

        movie.setMovieScreenings(movieScreenings);

        return movie;
    }
}
