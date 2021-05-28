export class User {
    private id: number;
    private firstName: string;
    private lastName: string;
    private email: string;
    private isAdmin: boolean;

    constructor(id: number, firstName: string, lastName: string, email: string, isAdmin: boolean) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isAdmin = isAdmin;
    }

    getName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
