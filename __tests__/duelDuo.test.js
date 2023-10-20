const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("page makes sure robots are in a div", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id('draw')).click()
    const isDiv = await driver.findElement(By.id('choices')).getTagName()
    expect(isDiv).toBe('div')
  });
  test("check to make sure you can click on duel once you add two robots", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.css('button[class="bot-btn"]')).click()
    await driver.findElement(By.css('button[class="bot-btn"]')).click()
    let yourDuo = await driver.wait(until.elementLocated(By.css('section[class="container"]')))
    let duoCount = await yourDuo.getAttribute('childElementCount')
    expect(duoCount).toEqual("2")
  });
});