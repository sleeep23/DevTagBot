// test for surfit web scraping

const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false, ignoreDefaultArgs: ['--disable-extensions']});
    const page = await browser.newPage();
    await page.goto('https://www.surfit.io/tag/CSS');
    await page.waitFor(1000);
    const result = await page.evaluate(() => {
        let data = []; // Create an empty array that will store our data
        let elements = document.querySelectorAll("fNXhRg"); // Select all
        for (let element of elements) { // Loop
            let content = element.querySelector("h2")
            let title = content.innerText; // Select the title
            let link = content.getAttribute('href'); // Select the link
            data.push({title, link}); // Push an object with the data onto our array
        }
        return data; // Return our data array
    });
}

// for testing
console.log(scrape());