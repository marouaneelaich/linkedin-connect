const argv = require('yargs').argv
const { init, login, connect } = require('./lib')

const keywords = argv.keywords ? argv.keywords.split(',') : ['']
const headless = !!argv.headless

async function run() {
  const { page, browser } = await init(headless)

  console.log('Login in...')
  await login(page)

  console.log('Preparing...')
  await connect(
    page,
    keywords
  )

  browser.close()
}

process.on('SIGINT', function() {
  // exit gracefully
  process.exit()
})

run()
