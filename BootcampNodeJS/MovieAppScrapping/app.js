/** @format */

const express = require('express');
const app = express();
const path = require('path');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

let browser;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

async function scrapeData(url, page) {
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 0 });
    const html = await page.evaluate(() => document.body.innerHTML);
    const $ = cheerio.load(html);

    let title = $('h1').text();
    let description = $(
      '#mw-content-text > div.mw-content-ltr.mw-parser-output > p:nth-child(9)'
    ).text();

    return {
      title,
      description,
    };
  } catch (error) {
    console.log(error);
  }
}

async function getResults() {
  browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  let data = await scrapeData(
    'https://en.wikipedia.org/wiki/2023_Telangana_Legislative_Assembly_election',
    page
  );

  console.log(data.title);
  console.log(data.description);
  browser.close();
}

app.get('/results', (req, res) => {
  res.render('results');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.listen(3000, () => {
  console.log('Server started at port 3000.');
});
