class Customer {
    private firstName: string
    private lastName: string;

    constructor(_firstName: string, _lastName: string) {
        this.firstName = _firstName;
        this.lastName = _lastName;
    }


    get _firstName(): string {
        return this.firstName;
    }

    set _firstName(value: string) {
        this.firstName = value;
    }

    get _lastName(): string {
        return this.lastName;
    }

    set _lastName(value: string) {
        this.lastName = value;
    }
}

let myNewCustomer = new Customer("Madalin", "Ghergut")
console.log(myNewCustomer)
myNewCustomer._lastName = "Bianca12123"
myNewCustomer._firstName = "Bianca121233"
console.log(myNewCustomer)
