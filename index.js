
// PersonAccount Details

class PersonAccount {
    constructor(firstName, lastName, incomes, expenses, other ) {
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = incomes
        this.expenses = expenses
        this.other = other
    };
    fullName(){
        let fullnName = this.firstName + " " + this.lastName ;
        console.log(fullnName);
    }
    totalIncome() {
        let total = 0;
        this.incomes.forEach(income => {
            total += income;
        });
        console.log("Total income = " + total);
        return total;
    }
    totalExpense() {
        let total = 0;
        this.expenses.forEach(expense => {
            total += expense;
        });
        console.log("Total Expenses = " + total);
        return total;
    }
    addIncome(amount) {
        this.incomes.push(amount);
        console.log("Total incomes stream "+" : "+ "Salary: "+this.incomes[0] +" , "+ "Bonus: "+this.incomes[1]+ " , "+"Properties: "+this.incomes[2]+ " , "+"Bonds: "+this.incomes[3] );
    }
    addExpense(amount) {
        this.expenses.push(amount);
        console.log("Total expenses "+ " : "+"Pocket Money : "+this.expenses[0] +" , "+"Eloads : "+this.expenses[1] +" , "+"Tours : "+this.expenses[2] +" , "+"Outings : "+this.expenses[3] );
    }
    accountBalance() {
        let accountBalance = this.totalIncome() - this.totalExpense();
        console.log("Total Account Balance = " + accountBalance);
    }
}
const account = new PersonAccount("Fayaz", "Khan", [60000, 25000, 50000, 30000], [20000, 4400, 36800, 25900], [12000, 1400, 55844, 55987]);

document.write("Total incomes stream "+" : "+ "Salary: "+account.incomes[0] +" , "+ "Bonus: "+account.incomes[1]+ " , "+"Properties: "+account.incomes[2]+ " , "+"Bonds: "+account.incomes[3] +"<br>");
document.write("Total expenses "+ " : "+"Pocket Money : "+account.expenses[0] +" , "+"Eloads : "+account.expenses[1] +" , "+"Tours : "+account.expenses[2] +" , "+"Outings : "+account.expenses[3] );
    
account.fullName();
account.totalIncome();
account.totalExpense();
account.addIncome(12000);
account.addExpense(15500);
account.accountBalance();
account.addIncome(101260);
account.addExpense(1556);
account.accountBalance();


// 02

class automobile {
    constructor(name, model, color, type) {
        this.name = name
        this.model = model
        this.color = color
        this.type = type === "m" ? "manual" : "auto"
    }
    start() {
        console.log(`${this.name} is ready for drive.`);
    }
    opendoor() {
        console.log(`${this.name}'s door is open.`);
    }
}
class Car extends automobile {
    constructor(name, model, color, type, doors, maxspeed) {
        super(name, model, color, type)
        this.doors = doors
        this.maxspeed = maxspeed
    }
}

const car = new Car("Civic", "2022", "black", "a", "4", "160");
car.start();
car.opendoor();

class Truck extends automobile {
    constructor(name, model, color, type, doors, maxspeed) {
        super(name, model, color, type)
        this.doors = doors
        this.maxspeed = maxspeed
    }
}

const truck = new Truck("Hino", "2015", "white", "m", "2", "120");
truck.start();
truck.opendoor();

class Bus extends automobile {
    constructor(name, model, color, type, doors, maxspeed) {
        super(name, model, color, type)
        this.doors = doors
        this.maxspeed = maxspeed
    }
}
const bus = new Bus("youtang-master", "2020", "yellow", "m", "3", "180");
bus.start();
bus.opendoor();