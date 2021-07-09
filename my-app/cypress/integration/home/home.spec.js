/// <reference types="cypress" />

describe('home page', () => {

    it('displays MyApp in TopBar', () => {
      cy.visit('http://localhost:3000/')
      
      cy.get('.TopBar h6').should('have.text', 'MyApp')
    })
  
    it('displays open Select on click', () => {
        cy.visit('http://localhost:3000/')
        
        cy.get('[class^=Select_host').click();

        // Exercice
        // Ensuite simuler le click sur Eric
        // Verifier que Eric s'affiche dans la TopBar et sur la Home
      })
  })
  