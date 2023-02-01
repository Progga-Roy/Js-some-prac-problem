var mySelf = {

    name: 'Progga Roy',
    status: 'student',
    nationality: "Bangladeshi",
    institution: 'East Delta University',
    home_town: 'Feni',
    favorite_color: 'black',
    department: 'CSE',

}

// console.log(mySelf);
// var keys = Object.keys(mySelf)

// console.log(keys);
// var values = Object.values(mySelf)
// console.log(values);
// var propertiesKey = mySelf;
// var propertiesValue = mySelf[propertiesKey];
var propertiesKey = 'nationality';
var propertiesValue = mySelf[propertiesKey]
// console.log(propertiesKey,propertiesValue);

var keys = Object.keys(mySelf);
// console.log(keys);
var values = Object.values(mySelf);
// console.log(values);

for (var i = 0; i < keys.length; i++) {
    var propertiesKey = keys[i];
    var propertiesValue = mySelf[propertiesKey]
    // console.log(propertiesKey,propertiesValue);
}

// foo bar print

function foo(name) {
    function bar() {
        console.log('foo' + name);
    }
    return bar()
}
foo('bar')

// using function find average
function make_ave(first, second, third) {
    var threeInteger = first + second + third;
    var integerAve = threeInteger / 3;
    return parseFloat(integerAve.toFixed(2));
}
var givenNumber = make_ave(35, 18, 59);
console.log(givenNumber);

// using function and array find average

function make_ave(ave) {
    var sum = 0;
    for (let i = 0; i < ave.length; i++) {
        var element = ave[i];
        var sum = sum + element;
        var average = sum / ave.length;
    }
    return average;
}
var average = make_ave([12, 34, 78, 79, 89, 43, 25]);
console.log(average);

// multiplication table
function multiplicationTable(number) {
    for (var i = 1; i <= 10; i++) {
        var mulTable = number * i;
        console.log(number + "*" + i + "=" + mulTable)
    }


}
multiplicationTable(13);

// upper to lowercase

function upperCase(name) {
    var display = name.toLowerCase();
    return display;
}
var lowerCase = upperCase("EAST DELTA UNIVERSITY");
console.log(lowerCase);

// full name

function fullName(x, y) {

    var firstName = x;
    var lastName = y;
    return firstName + " " + lastName;

}
var giveName = fullName('Chinmayi','Progga');
console.log(giveName);

// square

function square(number) {
    var displayNumber = Math.pow(number, 2);
    // var displayNumber = number * number;
    return displayNumber;
}
var giveNumber = square(5);
console.log(giveNumber)

// food object display from the object

const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],

    crust: 'deep dish',

    serves: 2

}
console.log(pizza.toppings[2]);
