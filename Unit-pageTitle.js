const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
driver.get('http://yoop.app');

return driver.wait(until.elementLocated(By.id('header-logIn-button')), 5 * 1000)
.then(function(){
driver.findElement(webdriver.By.id('header-logIn-button')).then(function(){
    driver.getTitle().then(function(title) {
      console.log(title)
      if(title === 'Yoop') {
         console.log('Test passed');
      } else {
         console.log('Test failed');
      }
     driver.quit();
    });
  });
});
