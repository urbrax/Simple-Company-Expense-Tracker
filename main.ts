export {}

const project_name: /*any*/ string /*| number | boolean)*/ = '===Company Expense Tracker==='
console.log(project_name.toUpperCase());
/*project_name = "42";*/

class Person{
    private static id_counter: number = 0;
    private id: number;
    private name: string;

    protected constructor(name: string){
        this.id = ++Person.id_counter;
        this.name = name;
    
    }

    public getId(): number{
        return this.id;
    }

    public getName(): string{
        return this.name;
    }


    public toString(): string{
        return `${this.name} (ID: ${this.id})`;
    }
}

class Staff extends Person{
    private salary: number;
    private salaryEarned: number;

    constructor(name: string, salary: number){
        super(name);
        this.salary = salary;
        this.salaryEarned = 0;
    }

    public receiveSalary(){
        this.salaryEarned += this.salary;
    }

    public getSalaryEarned(): number{
        return this.salaryEarned;
    }

    public toString(){
        return `${super.toString()}, received a total of ${this.getSalaryEarned()}`;
    }

}

class Client extends Person{
    private paid: number = 0;
    private totalToPay: number;
    private company: string = null;

    constructor(name: string, totalToPay: number, company?: string){
        super(name);
        this.totalToPay = totalToPay;
        if (company){
            this.company = company;
        }
    }

    public pay(amount: number){
        this.paid += amount;
    }

    public getPaid(): number{
        return this.paid;
    }

    private getRemainingToPay(): number{
        return this.totalToPay - this.paid;
    }

    public toString(): string{
        return `${super.toString()}${this.company ? ' from company ' + this.company: ''} has ${this.getRemainingToPay()} left to pay`
    }
}

class Company{
    private name: string;
    private staffList: Staff[];
    private clientsList: Client[];

    constructor(name: string, staffList: Staff[], clientsList: Client[]){
        this.name = name;
        this.staffList = staffList;
        this.clientsList = clientsList;
    }

    private getTotalSpent(): number{
        return this.staffList.map(
            staff => staff.getSalaryEarned()
        ).reduce((sum, current) => sum + current, 0);
    }

    private getTotalEarned(): number{
        return this.clientsList.map(
            client => client.getPaid()
        ).reduce((sum, current) => sum + current, 0);
    }
    public toString(): string{
        return `Company ${this.name}, Earned: ${this.getTotalEarned()}, Spent: ${this.getTotalSpent()}`;
    }
}

let jane = new Staff('Jane', 300)
jane.receiveSalary();
console.log(jane.toString());

let joe = new Staff('Joe', 500)
joe.receiveSalary();
console.log(joe.toString());

// console.log(`Joe's ID: ${joe.getId()}`);

let john = new Staff('John', 300);
john.receiveSalary();
console.log(john.toString());

let josephine = new Staff('Josephine', 500);
josephine.receiveSalary();
console.log(josephine.toString());

let joseph = new Client('Joseph', 5000);
let maria = new Client('Maria', 4000, 'ACME');

joseph.pay(2000);
maria.pay(2000);

console.log(joseph.toString());
console.log(maria.toString());

let mycompany = new Company(
    'My Company',
    [jane, joe, john, josephine],
    [joseph, maria]
);

console.log(mycompany.toString());