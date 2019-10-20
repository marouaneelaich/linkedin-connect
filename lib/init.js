const puppeteer = require('puppeteer')

async function init() {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1
  })

  return { page, browser }
}

module.exports = init
