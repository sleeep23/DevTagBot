import { ContentProps } from "../type/content-type";
const puppeteer = require("puppeteer-core");
const { executablePath } = require("puppeteer");

const surfitScrape = async (tag: string) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    executablePath: executablePath(),
  });
  const page = await browser.newPage();
  await page.goto(`https://www.surfit.io/tag/${tag}`);
  const res = await page.evaluate(async () => {
    const sleep = (sec: number) => {
      return new Promise((resolve) => setTimeout(resolve, sec * 1000));
    };
    let result: Array<ContentProps> = [];
    // Running Javascript on browser
    let links: Array<string> = [];
    let titles: Array<string> = [];
    let authors: Array<string> = [];
    let overlayLinks: Array<string> = [];

    // Getting Img src from article
    const temp_links = await document.querySelectorAll(
      ".ct-item .article-thumbnail-inner img"
    );
    await sleep(1);
    await temp_links.forEach((item: Element) => {
      if (item instanceof HTMLImageElement) links.push(item.src);
    });

    // Getting Author name from anchorElement
    const temp_authors = await document.querySelectorAll(
      ".ct-item .author-name"
    );
    await sleep(1);
    await temp_authors.forEach((item: Element) => {
      if (item instanceof HTMLAnchorElement) authors.push(item.innerText);
    });

    // Getting titles
    const temp_titles = await document.querySelectorAll(".ct-item .title");
    await sleep(1);
    temp_titles.forEach((item: Element) => {
      if (item instanceof HTMLAnchorElement) titles.push(item.innerText);
    });

    // Getting overlay links
    await document
      .querySelectorAll(".ct-item .link-overlay")
      .forEach((item: Element) => {
        if (item instanceof HTMLAnchorElement) overlayLinks.push(item.href);
      });

    // Push all the information into result
    let length = Math.max(
      links.length,
      titles.length,
      authors.length,
      overlayLinks.length
    );
    for (let i = 0; i < length; i++) {
      result.push({
        title: titles[i],
        link: links[i],
        author: authors[i],
        overlayLink: overlayLinks[i],
      });
    }
    return result;
  });
  await browser.close();
  return res;
};

export default surfitScrape;
