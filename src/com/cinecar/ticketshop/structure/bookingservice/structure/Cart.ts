import { Ticket } from "./Ticket";

export class Cart {
    private id: number;
    private tickets: Array<Ticket>;
    private creationDate: Date;

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

    public getCreationDate(): Date {
        return this.creationDate;
    }

    public setCreationDate(creationDate: Date): void {
        this.creationDate = creationDate;
    }
}
