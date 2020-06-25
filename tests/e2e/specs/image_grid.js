// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  beforeEach: (browser) => browser.init(),

  'Image grid is present': (browser) => {
    browser
      .waitForElementVisible('#app')
      .assert.elementCount('.image-grid-container', 1)
      .assert.elementCount('figure img', 10)
      .assert.elementCount('figure figcaption', 10)
      .end()
  }
}
