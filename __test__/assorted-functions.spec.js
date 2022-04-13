const { reverseNum, alphebetizeString, capitalize, isPrime, removeDupes, secondFinder, swap, bubbleSort} = require("../src/assorted-functions");

describe("reverseNum", () => {
    test("it should reverse a number and return the number", () => {
        const num = 349212;
        expect(() => reverseNum(num).toBe(212943));
    });

    test("if the output begins with '0' it should return a string instead", () => {
        const num = 349212;
        expect(() => reverseNum(num).toBe('012943'));
    });
});

describe("alphebetizeString", () => {
    const str = 'webmaster';
    const result = alphebetizeString(str);

    test("it should return a string", () => {
        expect(() => typeof result.toBe("string"));
    });

    test("uses Array.sort() to ensure the outputted string is in alphebetical order", () => {
        expect(() => Array.sort().toHaveBeenCalled());
    })
})

describe("capitalize", () => {
    const str = "the quick brown fox";
    const result = capitalize(str);

    test("it should return a string", () => {
        expect(() => typeof result.toBe("string"));
    })
    
    test("not an array", () => {
        expect(() => typeof result.not.toBe("array"));
    })

    test("it should capitalize the first letter in every word", () => {
        expect(() => toUpperCase().toHaveBeenCalled());
        expect(() => capitalizeStr.toHaveReturned('The Quick Brown Fox'));
    })
})
    
describe ("isPrime", () => {
    test()
})