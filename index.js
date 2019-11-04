#!/usr/bin/env node

const argv = require('yargs').argv
const { init, login, connect } = require('./lib')

const keywords = argv.keywords ? argv.keywords.split(',') : ['']
const headless = !!argv.headless
const username = argv.username
const password = argv.password

if (!password || !username) {
  console.log('You should specify username and password')
  process.exit(1)
}

async function run() {
  const { page, browser } = await init(headless)

  console.log('Login in...')
  await login(page, { username, password })

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
