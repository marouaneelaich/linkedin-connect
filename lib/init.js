const puppeteer = require('puppeteer')

async function init(headless) {
  const browser = await puppeteer.launch({ headless })
  const page = await browser.newPage()
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1
  })

  return { page, browser }
}

module.exports = init
