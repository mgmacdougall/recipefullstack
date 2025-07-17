import data from '../../fixtures/example.json'

describe('Home Page test', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('displays correct header', () => {
    
    cy.get("h1").should('have.text', data.pageName)
  })
})