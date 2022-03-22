export class OrderPage {
  /**
   * @name navigateTo
   * @description
   * Visit the url of the website
   */
  navigateTo() {
    cy.visit("https://alpacabox.md/");
  }

  /**
   * @name contains
   * @description
   * DOM elements should contain the text
   *
   * @param {string} locator Locator of needed element.
   * @param {string} value Value to assert against locator.
   */
  contains(locator, value) {
    cy.get(locator).contains(value);
  }

  /**
   * @name click
   * @description
   * Click on elements
   *
   * @param {string} locator Locator of needed element.
   */
  click(locator) {
    cy.get(locator).click({ force: true });
  }

  /**
   * @name click
   * @description
   * Click on elements
   *
   * @param {string} locator Locator of needed element.
   */
  clickAndType(locator, value = null) {
    cy.get(locator).click({ force: true }).type(value);
  }
  /**
   * @name select
   * @description
   * Select elements
   *
   * @param {string} locator Locator of needed element.
   */
  select(locator, value) {
    cy.get(locator).select(value);
  }

  /**
   * @name type
   * @description
   * Type into a DOM element
   *
   * @param {string} locator Locator of needed element.
   * @param {string} value Value to assert against locator.
   */
  type(locator, value) {
    cy.get(locator).type(value);
  }

  /**
   * @name should
   * @description
   * Get and compare locator value
   *
   * @param {string} locator Locator of needed element.
   * @param {string} chainers Any valid chainer that comes from Chai.
   */
  should(locator, chainers) {
    cy.get(locator).should(chainers);
  }
}
