import { userInfo } from "os";

export class User {
    private id: number;
    private password: String;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getPassword(): String {
        return this.password;
    }

    public setPassword(password: String): void {
        this.password = password;
    }

    public static fromJSON(json): User {
        const user: User = new User();

        user.setId(json.id);
        user.setPassword(json.password);

        return user;
    }
}
