const argv = require('yargs').argv
const { init, login, connect } = require('./lib')

const keywords = argv.keywords ? argv.keywords.split(',') : ['']

async function run() {
  const { page, browser } = await init()

  await login(page)

  await connect(
    page,
    keywords
  )

  browser.close()
}

run()
