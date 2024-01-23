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
  it('visits the app gallery', () => {
    cy.visit('/')
    cy.get('.starry-night').click()
    cy.fixture('data').then((user) => {
      user.forEach((user: { name: any; year: any; description: any; artist: { name: any } }) => {
        const name = user.name
        const year = user.year
        const description = user.description
        const artistName = user.artist.name

        cy.contains('span', year)
        cy.contains('h1', name)

        cy.contains('p', artistName)

        cy.get('.name').then(($h1) => {
          if ($h1.is(":contains('The Swing')")) {
            cy.get('.next').should('be.disabled')
          } else {
            cy.get('.next').click()
          }
        })

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000)
        cy.get('.view').click()
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000)
        cy.get('.close').click({ force: true })
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000)
      })

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000)
    })
  })
})
