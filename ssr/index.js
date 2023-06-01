const { IncomingMessage, ServerResponse } = require('http')
const { readFileSync } = require('fs')
const render = require('./render.js')

const PLACEHOLDER = '<div id="ssr-placeholder"></div>'

/**
 * Server Side Render the Home Page
 *
 * @param {IncomingMessage} request
 * @param {ServerResponse} response
 */
async function process(request, response) {
  const homeFileBuffer = readFileSync('./index.template.html')
  const htmlText = homeFileBuffer.toString()
  const [precontent, postcontent] = htmlText.split(PLACEHOLDER)

  response.writeHead(206, { 'Content-Type': 'text/html; charset=utf-8' })
  response.write(precontent)

  const content = await render()
  response.write(content)

  response.write(postcontent)
  response.end()
}

module.exports = process