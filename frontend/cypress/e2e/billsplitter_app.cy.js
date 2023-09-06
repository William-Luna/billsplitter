describe('Initial App Load', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })
  it('Components load in', function () {
    cy.contains('Add A Person')
    cy.contains('Add Items')
    cy.contains('Set Tax And Tip')
    cy.contains('People List')
    cy.contains('Summary')
  })

  it('Login page loads', function () {
    cy.get('.loginbutton').click()
    cy.contains('Sign In')
  })
})