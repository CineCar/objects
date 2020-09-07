import { MovieScreening } from "../../movieservice/structure/MovieScreening";
import { Booking } from "./Booking";

export class Ticket {
    private id: number;
    private movieScreening: MovieScreening;
    private booking: Booking;
    private row: number;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getMovieScreening(): MovieScreening {
        return this.movieScreening;
    }

    public setMovieScreening(movieScreening: MovieScreening): void {
        this.movieScreening = movieScreening;
    }

    public getBooking(): Booking {
        return this.booking;
    }

    public setBooking(booking: Booking): void {
        this.booking = booking;
    }

    public getRow(): number {
        return this.row;
    }

    public setRow(row: number): void {
        this.row = row;
    }
}
