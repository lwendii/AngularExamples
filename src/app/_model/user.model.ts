export class User {
    private id: number;
    private firstName: string;
    private lastName: string;
    private email: string;

    constructor(id: number, firstName: string, lastName: string, email: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    getName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
