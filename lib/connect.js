const CARDS_SELECTOR = 'section.mn-discovery-tabs .discover-entity-card'

function includeKeyword(occupation, keywords) {
  for (let i = 0; i < keywords.length; i++)
    if (new RegExp(keywords[i], 'i').test(occupation)) return true
  return false
}

async function connect(page, keywords) {
  await page.goto('https://www.linkedin.com/mynetwork/', {
    timeout: 1000 * 60 * 2
  })

  let i = 0
  let connections = 0
  let shouldContinue = true

  while (shouldContinue) {
    const listLength = await page.evaluate(sel => {
      return document.querySelectorAll(sel).length
    }, CARDS_SELECTOR)

    for (; i < listLength; i++) {
      const occupation = await page.evaluate(sel => {
        return document.querySelector(sel).innerText
      }, CARDS_SELECTOR + `:nth-child(${i + 1}) .discover-person-card__occupation`)

      if (includeKeyword(occupation, keywords)) {
        connections++
        const CONNECT_SELECTOR =
          CARDS_SELECTOR +
          `:nth-child(${i + 1}) button[data-control-name="invite"]`
        try {
          await page.click(CONNECT_SELECTOR)

          shouldContinue = !(await page.evaluate(sel => {
            return document.querySelectorAll(sel).length
          }, 'div[labelledby="ip-fuse-limit-alert__header"]'))
          if (!shouldContinue) {
            break
          }
        } catch (e) {}
      }
      await page.waitFor(500)
      process.stdout.write(`\rSuggestions: ${i + 1}, Requests: ${connections}`)
    }
    await page.evaluate(_ => {
      window.scrollBy(0, window.innerHeight)
    })
  }

  console.log('finished!')
}

module.exports = connect
