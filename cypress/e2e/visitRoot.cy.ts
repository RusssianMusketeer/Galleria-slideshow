// https://on.cypress.io/api

describe('Sanity test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('span', 'Starry Night')
    cy.contains('span', 'Girl with a Pearl Earring')
  })
})
