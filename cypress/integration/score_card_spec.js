describe('Scorecard user flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
      .get('.search-btn').click().click()
  });

  it('should be able to add players to a round', () => {
    cy.get('.course-card').eq(0).click()

    cy.get('input').type('main{enter}')

    cy.get('.choose-course-btn').click()
    cy.get('input').type('Phil{enter}')
    cy.get('input').type('Evan{enter}')
      .get('.start-round-btn').click()
  })

})
