describe('Search courses fuctionality', () => {

  beforeEach(() => {
    cy.intercept('Get', 'https://discify-api.herokuapp.com/api/v1/players',
    { fixture: 'courses.json'})

    cy.visit('http://localhost:3000')
  });

  it('Should display all courses if there is no input', () => {
      cy.get('.search-btn').click()
        .get('.course-card')
  })
})
