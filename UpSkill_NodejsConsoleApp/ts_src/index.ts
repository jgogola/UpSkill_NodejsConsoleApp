let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;


//Array - Strongly Typed:
let nums: number[] = [1, 2, 3];


//Touple
let user: Array<[number, string]> = [
    [1, 'Jason'],
    [2, 'Frank'],
    [3, 'Bob']
];

let userx: [number, string][] = [
    [1, 'Jason'],
    [2, 'Frank'], 
    [3, 'Bob']
];

//Enum:
enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);


//Function:
function calcTax(income: number, taxYear = 2023): number {

    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
    
}

calcTax(10_000);

//Objects:
let employee: {
    readonly id: number,
    name: string,
    phone?: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'jason',
    retire: (date: Date) => {
        console.log(date);
    }
};

//Type Alias:
type Employee = {
    readonly id: number,
    name: string,
    phone?: string,
    retire: (date: Date) => void
};

let employee2: Employee = {
    id: 1,
    name: 'Jason',
    retire: (date: Date) => {
    console.log(date);
    }
}

//Union Type
function kgToLbs(weight: number | string): number {

    //Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');

//Intersection Type
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UiWidget = Draggable & Resizable;

let textBox: UiWidget = {
    drag: () => { },
    resize: () => { }
}

//Literal Type:
type Quantity = 50 | 100 | 200;
let quantity: Quantity = 200;


//Null Type
type Customer = {
    name: string,
    birthday?: Date
}
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { name: 'Jim' };
}

//Traditinal null/undefined checking:
let customer = getCustomer(0);
if (customer != null && customer != undefined)
    console.log(customer.name);

//Optional property access operator:
let customer2 = getCustomer(1);
console.log(customer?.name);
console.log(customer?.birthday?.getFullYear());

//Optional element access operator
// customers?.[0]

//Optional call
let log: any = null;
log?.('a');