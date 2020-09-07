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
}
