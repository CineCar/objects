import { Movie } from "./Movie";

export class MovieScreening {
    private id: number;
    private movie: Movie;
    private datetime: Date;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getMovie(): Movie {
        return this.movie;
    }

    public setMovie(movie: Movie): void {
        this.movie = movie;
    }

    public getDatetime(): Date {
        return this.datetime;
    }

    public setDatetime(datetime: Date): void {
        this.datetime = datetime;
    }
}
