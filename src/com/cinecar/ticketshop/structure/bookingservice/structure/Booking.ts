import { Ticket } from "./Ticket";
import { Person } from "./Person";

export class Booking {
    private id: number;
    private tickets: Array<Ticket>;
    private person: Person;
    private cancelled: boolean;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getTickets(): Array<Ticket> {
        return this.tickets;
    }

    public setTickets(tickets: Array<Ticket>): void {
        this.tickets = tickets;
    }

    public getPerson(): Person {
        return this.person;
    }

    public setPerson(person: Person): void {
        this.person = person;
    }

    public isCancelled(): boolean {
        return this.cancelled;
    }

    public setCancelled(cancelled: boolean): void {
        this.cancelled = cancelled;
    }

    public static fromJSON(json): Booking {
        const booking: Booking = new Booking();

        booking.setId(json.id);
        booking.setCancelled(json.cancelled);

        if (json.person) booking.setPerson(Person.fromJSON(json.person));
        if (json.tickets) {
            const tickets: Array<Ticket> = [];
            json.tickets.forEach((jsonTicket) => {
                tickets.push(Ticket.fromJSON(jsonTicket));
            });
        }

        return booking;
    }
}
