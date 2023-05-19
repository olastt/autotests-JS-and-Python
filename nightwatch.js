/*создать тест для проверки заголовка страницы (таба, сама вкладка страницы сверху среди всех вкладок) и наличие на странице заголовка Каталог
и запустить его командой npx nightwatch*/


module.exports = {
  'check all': function (browser) {
    browser
      .url('http://testshop.sedtest-school.ru/')
      .waitForElementVisible('body', 5000, 'Заголовок загружен')
      .assert.titleContains('TestGym')
      .assert.containsText('body', 'TestGym')
      .waitForElementVisible('h4', 5000, 'Каталог найден')
      .expect.element('h4').text.to.equal('Каталог')
      browser.click('#dropdownMenuButtonCategory')
      .waitForElementVisible('.dropdown-menu', 5000, 'Выпадающее меню категорий найдено')
      .assert.visible('.dropdown-menu')
      .end();
  }
}

// Дополнительно, по желанию: Сделать регулярное выражение для проверки соответствия адреса почты вида <user.name>@<massMail>.<com>


module.exports = {
  'check email format': function (browser) {
    browser.url('http://testshop.sedtest-school.ru/users/auth/')
    const emailRegexp =  /^[a-zA-z0-9_.]+@[a-zA-z0-9_.]+\.[a-zA]{2,}$/;
    const email = 'user.name@example.com';
    browser.assert.match(email, emailRegexp, 'Адрес почты соответствует формату');
    console.log(email.match(emailRegexp).join(''));
    browser.end();
  }
}

/* кстати его можно упростить заменив
a-z0-9_
на \w
а A-Z на добавление флага i - т.е. case insensitive
[A-Za-z0-9_.-] -> [\w.-]/i */
