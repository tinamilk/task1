
//1
const squareArray = (arr) => arr.map(num => num**2);

//2
const getUnique = (arr) => Array.from(new Set(arr));

//3
const isNumbersPositive = (arr) => {
    let isPositive = true;

    arr.forEach(num => {

        if (num <= 0) {
            isPositive = false;
        }

    });

    return isPositive;
}

//4
const getNegatives = (arr) => arr.filter(num => num < 0);

//5
const getSum = (arr) => arr.reduce((prev, curr) => prev+=curr);

//6
const getSubarray = (arr) => arr.filter(elem => Array.isArray(elem));


//7
const getMoreThanFour = (str) => {

    return str.split(' ').reduce((counter, word) => {

        if (word.length > 4) {
            counter += 1;
        }

        return counter;
    }, 0)
};

//8
const findSixLengthNum = (str) => {

    const result = str.match(/(^|\D)(\d{4,6})(?!\d)/);

    return result ? result[0].match(/\d{6}/)[0] : false
};

//1
console.log(squareArray([6, 8, 10,4])); // [ 36, 64, 100, 16 ]
//2
console.log(getUnique([6, 8, 10, 4, 4, 6])); //[ 6, 8, 10, 4 ]
//3
console.log(isNumbersPositive([6, 8, -10, -2, 4, 4, 6])); //false
console.log(isNumbersPositive([6, 8, 10, 2, 4, 4, 6])); //true
//4
console.log(getNegatives([6, -8, 10, -2, 4, 4, 6])); //[ -8, -2 ]
console.log(getNegatives([6, 8, 10, 4, 4, 6])); //[]
//5
console.log(getSum([6, -8, 10])); //8
//6
console.log(getSubarray([1, 2, [4, 6], [90, 'jelod'], {a: 8, r:8}])); //[ [ 4, 6 ], [ 90, 'jelod' ] ]
//7
console.log(getMoreThanFour('akkbb ssbaab , hhhyy kjkjd jks')); //4
//8
console.log(findSixLengthNum('abcef12345678ghi654321klm')); //654321
console.log(findSixLengthNum('abc999999')); //999999
console.log(findSixLengthNum('999999')); //999999
console.log(findSixLengthNum('999998ff')); //999998
console.log(findSixLengthNum('abc')); //false