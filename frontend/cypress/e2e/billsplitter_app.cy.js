describe('Initial App Load', function () {
  beforeEach(function () {
    cy.visit('')
  })
  it('Components load in', function () {
    cy.contains('Add A Person')
    cy.contains('Add Items')
    cy.contains('Set Tax And Tip')
    cy.contains('People List')
    cy.contains('Summary')
  })

  it('Login page loads in', function () {
    cy.get('.loginbutton').click()
    cy.contains('Sign In')
  })
})

describe('Basic functionalities', function () {
  beforeEach(function () {
    cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`)
    const user = {
      name: 'Testing',
      username: 'testing',
      password: 'testpwtest'
    }

    cy.request('POST', `${Cypress.env('BACKEND')}/users/`, user)

    cy.visit('')
  })

  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.get('.loginbutton').click()
      cy.get('#username').type('testing')
      cy.get('#password').type('testpwtest')
      cy.get('#submitlogin').click()

      cy.get('.MuiSnackbar-root').should('be.visible')
      cy.location('pathname').should('eq', '/')
    })

    it('fails with incorrect credentials', function () {
      cy.get('.loginbutton').click()
      cy.get('#username').type('wronguser')
      cy.get('#password').type('wrongpw')
      cy.get('#submitlogin').click()

      cy.get('.MuiSnackbar-root').should('be.visible')
      cy.get('.MuiAlert-root').should('have.css', 'background-color', 'rgb(253, 237, 237)')
    })
  })

  describe('Main Bill App', function () {
    it('Successfully adds person and item to bill', function () {
      cy.get('#personformname').type('Test Person')
      cy.get('#personformbutton').click()

      cy.get('.MuiAlert-message').contains('Test Person has been added!')
      cy.get('#peoplelist').children().should('have.length', 1)

      cy.get('#itemformselect').click()
      //cont.
    })
  })
})