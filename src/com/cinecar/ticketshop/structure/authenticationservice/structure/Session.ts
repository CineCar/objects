import { User } from "./User";

export class Session {
    private id: number;
    private token: String;
    private user: User;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getToken(): String {
        return this.token;
    }

    public setToken(token: String): void {
        this.token = token;
    }

    public getUser(): User {
        return this.user;
    }

    public setUser(user: User): void {
        this.user = user;
    }
}
