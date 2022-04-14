const reverseNum = (num) => {
    let number = num.toString();
    let newNum = "";
  
    for (let i = number.length - 1; i > -1; i--) {
      newNum += number[i];
    }
  
    return newNum[0] === "0" ? newNum : Number(newNum);
  };
  
  const alphebetizeString = (str) => {
    return str.split("").sort().join("");
  };
  
  const capitalize = (str) => {
    let sentence = str.split(" ");
  
    return sentence
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ");
  };
    
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      return num % i === 0 ? false : true;
    }
  };
  
  const removeDupes = (str) => {
    let noDupes = [];
  
    str.split("").forEach((letter) => {
      if (!noDupes.includes(letter)) {
        noDupes.push(letter);
      }
    });
    return noDupes.join("");
  };
    
  const secondFinder = (arr) => {
    arr.sort((a, b) => a - b);
  
    return [arr[1], arr[arr.length - 2]];
  };

  
  function swap(array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  
    return array;
  }
  
  function bubbleSort(array) {
    let sorted = false;
  
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < array[i + 1]) { //swap this to change ascending/descending
          swap(array, i, i + 1);
          sorted = false;
        }
      }
    }
  
    return array;
  }  

module.exports = { reverseNum, alphebetizeString, capitalize, isPrime, removeDupes, secondFinder, swap, bubbleSort};