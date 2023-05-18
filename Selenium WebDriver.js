/* Написать тест по ТЗ - количество товаров в нашем ИМ сейчас 5.

Попробуйте немного переделать этот скрипт чтобы он открывал страницу нашего интернет магазина и подсчитывал количество товаров на странице и сравнил их с заданным количеством - 5.

Результат сравнения вывести на экран в следующем виде:

PASSED (пройдено) - если количество товаров совпадает с заданным, или
FAILED (не пройдено) - ожидается 5, найдено ... - если количество отличается от 5.*/

const webdriver = require('selenium-webdriver');
require('chromedriver');

const driver = new webdriver.Builder()
.withCapabilities({'browserName': 'chrome'})
.build();

driver.get('http://testshop.sedtest-school.ru/');

driver.findElements(webdriver.By.css('.card.ml-1.mr-1.mt-2')) /*document.getElementByClassName("card ml-1 mr-1 mt-2") HTMLCollection(8)
                                                                [div.card.ml-1.mr-1.mt-2]*/ 
.then(function (products) {
console.log('found', products.length, 'products.');
if (products.length === 5) {
console.log('PASSED');
} else {
console.log('FAILED - expected 5, found', products.length);
}
driver.quit();
});
