/*Напишите функцию, которая выводит в консоль числа от 1 до n, где n – целое число, которое функция принимает в качестве параметра, при этом:
- выводит fizz вместо чисел, кратных 3;
- выводит buzz вместо чисел, кратных 5;
- выводит fizzbuzz вместо чисел, кратных и 3, и 5*/

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(15);




/*Найти гласные
Написать функцию, которая принимает строку в качестве аргумента 
и возвращает количество гласных, содержащихся в этой строке*/

function countVowels(str) {
    let vowels = "aeiou";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
      }

return count;
}

let str = "I`m learning JS!";
let count = countVowels(str);
console.log(count);


/*Написать функцию, которая возвращает значение true, 
если строка – палиндром, и false, если это не так.
При решении задачи необходимо учитывать пробелы и знаки препинания.*/

const isPalindrome = str => {
  // Удаляем все пробелы и знаки препинания из строки
  const cleanStr = str.replace(/[\W_]/g, '').toLowerCase(); /*[\W_]/g это регулярное выражение, 
  которое используется для удаления всех символов, кроме букв и цифр из строки.*/

  // Переворачиваем строку и сравниваем ее с исходной
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Пример использования
const str1 = "racecar";
const str2 = "not a palindrome";
console.log(isPalindrome(str1)); // true
console.log(isPalindrome(str2)); // false






//это чисто для себя на будущее

function getEvenNumbers(numbers) {
  let evenNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
  }
    return evenNumbers;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers); 
