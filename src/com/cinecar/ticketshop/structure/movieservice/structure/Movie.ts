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
}
