import puppeteer from "puppeteer";
import { ContentProps } from "../type/content-type";

let velogScrape = async (tag: string) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(`https://velog.io/tags/${tag}`);
  // console.log('page loaded');

  const result = await page.evaluate(() => {
    let data: Array<ContentProps> = [];
    let usernames: Array<string> = [];
    // start from here!!!
    document
      .querySelectorAll(".username a")
      .forEach((user) => usernames.push(user.innerHTML));
  });
  // console.log(result);
  await browser.close();
  // console.log('browser closed');

  return result;
};

export default velogScrape;
