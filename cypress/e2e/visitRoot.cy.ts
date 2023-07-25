// https://on.cypress.io/api

describe('Sanity test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'Starry Night')
    cy.contains('h2', 'Girl with a Pearl Earring')
  })
})
