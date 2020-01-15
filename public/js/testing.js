

const name = 'Dave';

console.log(`Hello my name is ${name}`);

const todo = [

    {
        name: "Dave",
        age: 22,
        home: 'Sherrington'
    },
    {
        name: "Dave",
        age: 22,
        home: 'Sherrington'
    },
    {
        name: "Dave",
        age: 22,
        home: 'Sherrington'
    }
];

const theListINJson = JSON.stringify(todo);
console.log(theListINJson);

console.log("This is the number " + addNums(1,2));

function addNums(num1, num2)
{
    const result = num1 + num2;
    return result;
}


function Person(firstname, lastname, dob)
{
    this.firstName = firstname;
    this.lastName = lastname;
    this.dob = dob;
}

Person.prototype.getName = function () {
    return this.firstName;
}

const testPerson = new Person('David','Tetreault', '21-10-93');

console.log(testPerson.getName());

//Making a Class

class Human {

    constructor(firstName,lastName,age)
    {
        this.firstname = firstName;
        this.lastname = lastName;
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}

const aHuman = new Human('Peter', 'Frank', 22)

console.log('Testing the new class ' + aHuman.getAge());

const mainTitle = document.getElementById('main-title')

console.log("This is the element " + mainTitle);



/*
There a three types of variables let, const, var

-They are different in regards to what scope they take within your program

Template Strings


 */