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

    public toJSON(): any {
        const tickets = [];

        this.getTickets().forEach((ticket: Ticket) => {
            tickets.push(ticket.toJSON(true));
        });

        return {
            id: this.id,
            creationDate: this.creationDate,
            tickets: tickets,
        };
    }

    public static fromJSON(json): Cart {
        const cart: Cart = new Cart();

        cart.setCreationDate(json.creationDate);
        cart.setId(json.id);

        const tickets: Array<Ticket> = [];

        if (json.tickets) {
            json.tickets.forEach((jsonTicket) => {
                tickets.push(Ticket.fromJSON(jsonTicket));
            });
        }

        cart.setTickets(tickets);

        return cart;
    }
}
