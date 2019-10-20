const CREDS = require('../credentials')

const USERNAME_SELECTOR = '#username'
const PASSWORD_SELECTOR = '#password'
const BUTTON_SELECTOR =
  '#app__container > main > div > form > div.login__form_action_container > button'

async function login(page) {
  await page.goto('https://linkedin.com/login')

  await page.click(USERNAME_SELECTOR)
  await page.keyboard.type(CREDS.username)

  await page.click(PASSWORD_SELECTOR)
  await page.keyboard.type(CREDS.password)

  await page.click(BUTTON_SELECTOR)

  await page.waitForNavigation()
}

module.exports = login
