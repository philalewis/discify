describe('Search courses fuctionality', () => {

  it('Should display all courses if there is no input', () => {
      cy.visit('http://localhost:3000')
      cy.get('.search-btn').click()
        .get('.course-card').first().click()
  })

  it('Should filter and display specified courses', () => {
      cy.visit('http://localhost:3000')

      cy.get('.search-bar').type('west')
        .get('.search-btn').click()
      cy.get('.card-name').first().contains('Westminster')
  })
})
