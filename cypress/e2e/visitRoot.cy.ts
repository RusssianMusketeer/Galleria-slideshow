// https://on.cypress.io/api

describe('Sanity test', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        // @ts-ignore
        delete win.navigator.serviceWorker
        // @ts-ignore
        delete win.navigator.serviceWorker
      }
    })
    if (window.navigator && navigator.serviceWorker) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister()
        })
      })
    }
  })

  afterEach(() => {
    if (window.navigator && navigator.serviceWorker) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister()
        })
      })
    }
  })
  it('visits the app root url', () => {
   cy.visit("/")
    cy.contains('span', 'Starry Night')
    cy.contains('span', 'Girl with a Pearl Earring')
  })
})
