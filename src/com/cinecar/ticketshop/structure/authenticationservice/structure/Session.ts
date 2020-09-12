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

    public toJSON(parent: boolean = false) {
        let json = {
            id: this.id,
            token: this.token,
        };

        if (parent && this.user) {
            json["user"] = this.user.toJSON();
        }

        return json;
    }

    public static fromJSON(json): Session {
        const session: Session = new Session();

        session.setId(json.id);
        session.setToken(json.token);

        if (json.user) session.setUser(User.fromJSON(json.user));

        return session;
    }
}
