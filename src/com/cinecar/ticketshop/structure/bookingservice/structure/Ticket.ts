import { MovieScreening } from "../../movieservice/structure/MovieScreening";
import { Booking } from "./Booking";

export class Ticket {
    private id: number;
    private movieScreening: MovieScreening;
    private booking: Booking;

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

    public toJSON(parent: boolean = false): any {
        let json = {
            id: this.id,
            movieScreening: this.movieScreening.toJSON(true),
        };

        if (this.booking && parent) {
            json["booking"] = this.booking.toJSON();
        }

        return json;
    }

    public static fromJSON(json): Ticket {
        const ticket: Ticket = new Ticket();

        ticket.setId(json.id);

        if (json.movieScreening) ticket.setMovieScreening(MovieScreening.fromJSON(json.movieScreening));
        if (json.booking) ticket.setBooking(Booking.fromJSON(json.booking));

        return ticket;
    }
}
