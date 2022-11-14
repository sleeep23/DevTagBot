const puppeteer = require('puppeteer');

let surfitScrape = async (tag) => {
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto(`https://www.surfit.io/tag/${tag}`);
    // console.log('page loaded');

    const result = await page.evaluate(() => {
      let data = [];
      let elements = document.querySelectorAll("h2");
      for (let element of elements){
        let title = element.innerText;
        let link = element.querySelector("a").href;
        data.push({title, link});
      }
      return data;
    })
    // console.log(result);
    await browser.close();
    // console.log('browser closed');

    return result;
}

export default surfitScrape;
