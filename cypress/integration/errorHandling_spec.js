describe('Error handling', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should handle 500 errors', () => {
    cy.intercept('GET','https://discify-api.herokuapp.com/api/v1/courses', {
      statusCode: 500
    })
    .get('.search-btn').click()
    .get('p').contains('500 Internal Server Error')
  })

  it('should handle 404 errors', () => {
    cy.intercept('GET','https://discify-api.herokuapp.com/api/v1/courses', {
      statusCode: 404
    })
    .get('.search-btn').click()
    .get('p').contains('404 Not Found')
  })


  it('should handle 400 errors', () => {
    cy.intercept('GET','https://discify-api.herokuapp.com/api/v1/courses', {
      statusCode: 401
    })
    .get('.search-btn').click()
    .get('p').contains('401 Unauthorized')
  })
})
