import { MovieScreening } from "./MovieScreening";

export class Movie {
    private id: number;
    private name: string;
    private duration: number;
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
}
