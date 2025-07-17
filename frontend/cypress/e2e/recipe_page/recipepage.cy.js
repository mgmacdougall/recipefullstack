import data from '../../fixtures/example.json'

describe('Recipe Page test', () => {
  beforeEach(() => {
    cy.visit("/recipes")
  })

  it('displays correct header', () => {
    cy.get("h1").should('have.text', 'Recipes')
  })
  it('Should have at least two recipe card', ()=>{
    cy.get('.recipe-card').should('have.length.at.least', 2)
  })
})