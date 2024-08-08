//task 1

// function analyzeString(s) {
//   let letterCount = 0;
//   let digitCount = 0;
//   let otherCount = 0;
  
//   for (let i = 0; i < s.length; i++) {
//       let char = s[i];
//       if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
//           letterCount++;
//       } 
//       else if (char >= '0' && char <= '9') {
//           digitCount++;
//       } 
//       else {
//           otherCount++;
//       }
//   }
  
//   console.log(`Количество букв: ${letterCount}`);
//   console.log(`Количество цифр: ${digitCount}`);
//   console.log(`Количество других знаков: ${otherCount}`);
// }

// const testString = "Hello, World! 1234";
// analyzeString(testString);

//task 2

// function numberToWords(num) {

//   if (num < 10 || num > 99) {
//       return 'Введено некорректное число. Пожалуйста, введите двузначное число.';
//   }
  

//   const tens = [
//       '',
//       '',
//       'двадцать', 
//       'тридцать', 
//       'сорок',   
//       'пятьдесят',
//       'шестдесят',
//       'семьдесят',
//       'восемьдесят',
//       'девяносто' 
//   ];
  
//   const units = [
//       '',        // 0
//       'один',    // 1
//       'два',     // 2
//       'три',     // 3
//       'четыре',  // 4
//       'пять',    // 5
//       'шесть',   // 6
//       'семь',    // 7
//       'восемь',  // 8
//       'девять'   // 9
//   ];
  
//   let result = '';
  
//   let tensPlace = Math.floor(num / 10);
//   let unitsPlace = num % 10;
  
//   if (tensPlace > 1) {
//       result += tens[tensPlace];
//   }
  
//   if (unitsPlace > 0) {
//       if (result) result += ' ';
//       result += units[unitsPlace];
//   }
//   return result;
// }

// console.log(numberToWords(35)); 
// console.log(numberToWords(89)); 
// console.log(numberToWords(12)); 
// console.log(numberToWords(7)); 

//task 3

// function transformString(input) {
//   let result = '';

//   for (let i = 0; i < input.length; i++) {
//       let char = input[i];
      
//       if (char >= 'A' && char <= 'Z') {
//           result += char.toLowerCase();
//       } else if (char >= 'a' && char <= 'z') {
//           result += char.toUpperCase();
//       } else if (char >= '0' && char <= '9') {
//           result += '_';
//       } else {      
//           result += char;
//       }
//   }

//   return result;
// }

// // Примеры использования
// console.log(transformString("Hello World! 123")); 
// console.log(transformString("JavaScript 2024")); 
// console.log(transformString("Testing 1 2 3")); 
// console.log(transformString("No Changes!")); 

//task 5

// function toAbbreviation(phrase) {
//   return phrase.split(' ').map(word => word[0].toUpperCase()).join('');                     
// }
// console.log(toAbbreviation("cascading style sheets")); // CSS
// console.log(toAbbreviation("объектноориентированное программирование")); // ООП
// console.log(toAbbreviation("JavaScript Object Notation")); // JSON
// console.log(toAbbreviation("Hyper text Markup Language")); // HTML

//task 6

// function concatenateStrings(...strings) {
//   return strings.join(' ');
// }

// console.log(concatenateStrings("Hello", "world!"));
// console.log(concatenateStrings("JavaScript", "is", "awesome!"));
// console.log(concatenateStrings("This", "is", "a", "test."));
// console.log(concatenateStrings("Concatenating", "multiple", "strings", "together."));

//task 8

// function describeURL(url) {
//   const isValidURL = url.includes('://');


//   if (!isValidURL) {
//       return 'Некорректный URL';
//   }

//   const parsedURL = new URL(url);

//   return `Протокол: ${parsedURL.protocol.replace(':', '')}, ` +
//          `Домен: ${parsedURL.hostname}, ` +
//          `Путь: ${parsedURL.pathname}`;
// }

// console.log(describeURL("https://itstep.org/ua/about"));
// console.log(describeURL("http://example.com/path/to/resource"));
// console.log(describeURL("ftp://ftp.example.com/file.txt"));
// console.log(describeURL("invalid-url"));

//task 9 

// function splitString(inputString, separator) {
//   return inputString.split(separator);
// }
// console.log(splitString("10/08/2020", "/")); 


