/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    //преобразовать строки в массивы отсортированных букв и сравнить массивы
    return Array.from(str1.toLowerCase()).sort().toString() === Array.from(str2.toLowerCase()).sort().toString();
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false

//это для проверки, как раскладываются UP и up
console.log('up: [' + Array.from('up'.toLowerCase()).sort().toString() + '], UP: ['+ Array.from('UP'.toLowerCase()).sort().toString() + ']');
