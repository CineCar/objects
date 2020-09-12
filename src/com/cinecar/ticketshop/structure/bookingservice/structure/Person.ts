export class Person {
    private id: number;
    private firstname: string;
    private lastname: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getFirstname(): string {
        return this.firstname;
    }

    public setFirstname(firstname: string): void {
        this.firstname = firstname;
    }

    public getLastname(): string {
        return this.lastname;
    }

    public setLastname(lastname: string): void {
        this.lastname = lastname;
    }

    public toJSON(): any {
        return {
            id: this.id,
            firstname: this.firstname,
            lastname: this.lastname,
        };
    }

    public static fromJSON(json): Person {
        const person: Person = new Person();

        person.setId(json.id);
        person.setFirstname(json.firstname);
        person.setLastname(json.lastname);

        return person;
    }
}
