const {
  reverseNum,
  alphebetizeString,
  capitalize,
  isPrime,
  removeDupes,
  secondFinder,
  swap,
  bubbleSort,
} = require("../src/assorted-functions");

describe("reverseNum", () => {
  test("it should reverse a number and return the number", () => {
    const num = 349212;
    expect(() => reverseNum(num).toBe(212943));
  });

  test("if the output begins with '0' it should return a string instead", () => {
    const num = 349212;
    expect(() => reverseNum(num).toBe("012943"));
  });
});

describe("alphebetizeString", () => {
  const str = "webmaster";
  const result = alphebetizeString(str);

  test("it should return a string", () => {
    expect(() => typeof result.toBe("string"));
  });

  test("uses Array.sort() to ensure the outputted string is in alphebetical order", () => {
    expect(() => Array.sort().toHaveBeenCalled());
  });
});

describe("capitalize", () => {
  const str = "the quick brown fox";
  const result = capitalize(str);

  test("it should return a string", () => {
    expect(() => typeof result.toBe("string"));
  });

  test("not an array", () => {
    expect(() => typeof result.not.toBe("array"));
  });

  test("it should capitalize the first letter in every word", () => {
    expect(() => toUpperCase().toHaveBeenCalled());
    expect(() => capitalizeStr.toHaveReturned("The Quick Brown Fox"));
  });
});

describe("isPrime", () => {
  test("it should return true if number is divisible only by itself and 1", () => {
    expect(() => isPrime("7").toBeTruthy());
  });
  test("it should return false if number has other divisors", () => {
    expect(() => isPrime("6").toBeFalsy());
  });
});

describe("removeDupes", () => {
  const str = "thequickbrownfoxjumpsoverthelazydog";
  const result = removeDupes(str);

  test("it should return a string", () => {
    expect(() => typeof result.toBe("string"));
  });

  test("it should only remove duplicates, not remove all characters", () => {
    expect(() => result.toHaveLength());
  });

  test("it should only have one instance of each character", () => {
    let dict = {};
    result.split(" ").forEach((word) => {
      dict[word] += 1;
    });

    expect(() => Math.max(dict.Object.Values).toBe(1));
  });
});

describe("bubbleSort", () => {
  const arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
  const result = bubbleSort(arr);

  test("not an array", () => {
    expect(() => typeof result.toBe("array"));
  });

  test("it should sort the array in descending order", () => {
    expect(() => {
      (result[0] > result[1] > result[-2] > result[-1]).toBeTruthy;
    });
  });
});
