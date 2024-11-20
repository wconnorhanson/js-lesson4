// Boolean - true/false

var t = true
var f = false

console.log(t, f);

/* 
    Boolean Operators

    '<' => less than
    '>' => greater than
    '==' => equal to  //just checks value
    '===' => is strictly equal to  //checks data type then value
    '<=' => less than or equal to
    '>=' => greater than or equal to
*/

console.log(5 > 8) //false

/* 
    Logical operators

    '&&' => and
    '||' => or
    '!' => not
*/


console.log(t && t); //t
console.log(t || f); //t
console.log(t && f); //f
console.log(f && f); //f
console.log(t || t); //t
console.log(f || f); //f

console.log(!t) //f
console.log(!f) //t


console.log((t||f)) && (!t||!f);

console.clear()

/* 
    building an... evil robot?

    -Conditionals-

    if statement
    Syntax-
        if (condition) {
            //do stuff
        }
*/

let num = -3628

if (num > 5) {
    console.log(`${num} is greater than five`);
}

/* 
    if/else statement
    syntax-
        if (condition) {
            do stuff
        } else {
            //do something else
        }
*/

if (num > 4) {
    console.log(`${num} is greater than 4`);
    
} else {
    console.log(`${num} is not greater than 4`);
    
}

/* 
    else if statement
    syntax- 
        if (condition) {
            // do stuff
        } else if (another thing) {
            //do something else
        } else {
            //do the final thing
        }
*/

//write a program that tells if a number is odd or even

// if (isNaN(num)) {
if (typeof(num) != 'number') {
    console.log(`not a number`);
} else {
    if ((num % 2) === 0) {
        console.log(`${num} is even`)
    } else if ((num % 2) === 1) {
        console.log(`${num} is odd`)
    } else {
        console.log(`wtf did you just input?`)
    }
};

// Write a program that will tell if a number is positive or negative

if (isNaN(num)) {
    console.log(`not a number`)
} else {
    if (num > 0) {
        console.log(`${num} is positive`)
    } else if (num < 0) {
        console.log(`${num} is negative`)
    } else {
        console.log(`${num} is zero`)
    }
}

/* 
    Switch
    syntax-
        switch (expression) {
            case A:
                //do stuff
                break;
            case B:
                //do stuff
                break;
            case N:
                //do stuff
                break;
            default:
                //do stuff
                break;
        }
*/

const now = new Date()

console.log(now);
console.log(now.getMonth())

const today = new Date().getDay()

switch (today) {
    case 0:
        console.log('Sunday')
        break;
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    default: 
    console.log(`error`)
}