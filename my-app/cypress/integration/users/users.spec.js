/// <reference types="cypress" />


describe('users page', () => {

    beforeEach(() => {
      // recharger un dump de la base 
      // cy.request('GET', '/reset/dump');
    });

    it('displays MyApp in TopBar', () => {
      cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', { fixture: 'users.json'})
        .as('fetchUsers')

      cy.visit('http://localhost:3000/users');

      // cy.get('input').type('ABC');

      cy.wait('@fetchUsers')

      cy.get('.Users').should('contain.text', "Jean Dupont");
    })
  
  })
  