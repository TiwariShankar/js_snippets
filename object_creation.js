/****factory pattern****/
function emp(name, age, sex) {
    
    var temp = {};

    temp.name = name;
    temp.age = age;
    temp.sex = sex;

    temp.getInfo = function () {
        console.log("\nFactory pattern");
        console.log("Employee name is: " + temp.name + ", Age: " + temp.age + ", Sex: " + temp.sex);    
    };

    return temp;
}

var Ron = emp("Ron", 32, "M");
Ron.getInfo();


//constructor pattern
function emp_cons(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;

    this.getInfo = function () {
        console.log("\nConstructor pattern");
        console.log("Employee name is: " + this.name + ", Age: " + this.age + ", Sex: " + this.sex);
    };
}

var Mark = new emp_cons("Mark", "53", "M")
Mark.getInfo();

/****prototype pattern****/
function emp_proto() {
}

emp_proto.prototype.name = '';
emp_proto.prototype.age = '';
emp_proto.prototype.sex = '';
emp_proto.prototype.getInfo = function () {
    console.log("\nPrototype pattern");
    console.log("Employee name is: " + this.name + ", Age: " + this.age + ", Sex: " + this.sex);
}
emp_proto.prototype.country = 'USA';

var James = new emp_proto();
James.name = 'James';
James.age = 39;
James.sex = 'M';

James.getInfo();
console.log('\nJames has own property:', James.hasOwnProperty('name'));
console.log('James has own property:', James.hasOwnProperty('country'));


/****Object.create for inheritance****/
var Employee = {
    name: "",
    salary: 0,
    getEmpInfo: function () {
        return "\nEmployee name: " + this.name + " and his salary is: " + this.salary;
    }
}

var Manager = Object.create(Employee);
Manager.name = "Shankar";
Manager.salary = 5000;
Manager.setAdminAccess = 'true';

console.log(Manager.getEmpInfo());


/**** setPrototype method *****/
let toyota = {
    drive() {
        return 'driving toyota';
    }
};

let camry = {
    wifi() {
        return 'camry';
    }
};

// Set toyota's __proto__ to camry's  __proto__'s  __proto__
Object.setPrototypeOf(camry, toyota);

// Add a new Method to toyota object
toyota.newMethod = function () {
    return 'new method from toyota';
};

console.log(camry.newMethod()); // Prints 'new method from toyota'

/**** Prototype chain ****/
const car = function () {}
car.prototype = {
    print(){
        return "I am a car";
    }
};

const ToyCar = function () {}
ToyCar.prototype = object.create(Car.prototype);
ToyCar.prototype.print = function () {
    return "I'm a toy car";
};

const ToyTransformer = function(){}
ToyTransformer.prototype = object.create(Car.prototype);
ToyTransformer.prototype.print = function () {
    return "I'm a transformer car";
};

const toyota = new car();
const legoCar = new ToyCar();
const optimusPrime = new ToyTransformer();

console.log(toyota.print())