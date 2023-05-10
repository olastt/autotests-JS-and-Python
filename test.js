//ЗАДАНИЕ 1

/*Представьте что у вас интернет магазин, продает книги, с соответствующими параметрами - название, автор, жанр, год издания,
ключевые слова (несколько), новинка в нашем магазине. Все эти данные нужно расписать переменными - строковые, числовые, массив, логическая.*/
//ОБЪЕКТ ОТДЕЛЬНО

let book = { // это наш объект одной книжки
name: "Война и мир",
author: "Лев Толстой",
genre:"Роман-эпопея",
year: 1867,
keywords: "Роман-эпопея",
new_product: true
};

let { name: currentName, author: currentAuthor, genre: currentGenre, year: currentYear, keywords: currentKeywords, new_product: currentNew_product } = book;

console.log(currentName, currentAuthor, currentGenre, currentYear, currentKeywords, currentNew_product);

//МАССИВ ОТДЕЛЬНО

// первый пример создания
let [name, author, genre, year, keywords, new_product] = ["Война и мир", "Лев Толстой", "Роман-эпопея", 1867, "Роман-эпопея", true];
console.log(name, author, genre, year, keywords, new_product) //это массив одной книжки

let book = ["Война и мир", "Лев Толстой", "Роман-эпопея", 1867, "Роман-эпопея", true];
let [name, author, genre, year, keywords, new_product] = book;
console.log(book) //или вот так


// второй пример создания
const books = [
{name: 'Война и мир', author: 'Лев Толстой', genre: 'Роман-эпопея', year: 1867, keywords: 'Роман', new_product: true},
{name: 'Cat', author: 'Dog', genre:'drama', year: 1997, keywords: 'drama', new_product: true},
];
console.log(books)

// третий пример создания
const book1 = {name: 'Война и мир', author: 'Лев Толстой', genre: 'Роман-эпопея', year: 1867, keywords: 'Роман', new_product: true};
const book2 = {name: 'Cat', author: 'Dog', genre:'drama', year: 1997, keywords: 'drama', new_product: true};

const books = [book1, book2];    
console.log(books) 

// пример создания массива с объектом внутри сразу
const books = [
{name: 'Война и мир', author: 'Лев Толстой', genre: 'Роман-эпопея', year: 1867, keywords: 'Роман', new_product: true},
{name: 'Cat', author: 'Dog', genre:'drama', year: 1997, keywords: 'drama', new_product: true},
];
console.log(books) 


//ЗАДАНИЕ 2

//Какой результат будет в следующем списке выражений?

1. true + false = 1 //true=1, false=0
2. 8 / "2" = 4 /*JavaScript автоматически преобразовал переменную string(8) в строку и соединил ее с переменной number("2")
в одну строку*/
3. "number" + 5 + 1 =  number51 //
4. 5 + 1 + "number" = 51number //
5. 7 && 2 = 2 /*Логическое И (&&) вычисляет операнды слева направо возвращая 
              сразу значение первого попавшего ложноподобного операнда; 
              если все значения истиноподобны, возвращается значение последнего операнда.*/
6. 2 && 7 = 7 //объяснение сверху
7. null + 1 = 1 //null принуждает к 0, получается 0+1
8. undefined + 1 = NaN // здесь ничего не является строкой. 1 не строка и undefined не строка
9. "five" + + "two" = // :((
10. 'true' == true = false //string "true" не равен значению true
11. false == 'false' = false //объяснение сверху
12. null == '' = false //объяснение сверху
13. !!"false" == !!"true" = true /* Возврат true только в том случае, если оба операнда ссылаются на один и тот же объект.
                          Возврат true только в том случае, если оба операнда имеют одинаковые символы в одном и том же порядке.*/
14. "4" - 3 = 1 /*JavaScript автоматически преобразовал переменную number(3) в строку и отминусовал ее с переменной number("4")
в одну строку*/
15. "4px" - 3 = /*Js пытается перевести «4px» в число и терпит фиаско, поэтому 4px превращается в NaN, 
а любые операции с NaN дают NaN. Для того, чтобы преобразовать 4px в число корректно необходимо использовать метод parseInt()*/
16. 0 || "0" && 1 = 1 /* 0 здесь будет восприниматься оператором || как boolean, то есть false, это просто строка,
                       "0" - string преобразуется в number, 1 - number, получается 0 или 0 и 1

/* var - это устаревшее объявление переменной, let - новое, в большинстве случаев используют ее, 
const - константная переменная, то есть неизменяемая и постоянная
в отличие от переменных, константам должно быть присвоено значение при их объявлении, и это значение нельзя изменить впоследствии

Объявление const защищает от изменений только саму переменную starships и items, а не её содержимое.
Содержимое объектов (массивов) может быть изменено. */