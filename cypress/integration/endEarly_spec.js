describe('end round early', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
      .get('.search-btn').click()
  });

  it('should allow user to end round early', () => {
    cy.get('.course-card').eq(0).click()

    cy.get('input').type('main{enter}')

    cy.get('.choose-course-btn').click()
    cy.get('input').type('Phil{enter}')
    cy.get('input').type('Evan{enter}')
    cy.get('.start-round-btn').click()
      .get('.minus-btn').eq(0).click()
      .get('p').contains('2')
      .get('.plus-btn').eq(1).click()
      .get('p').contains('4')
      .get('.next-hole-btn').click()
    cy.get('.end-round-early-btn').click()
      .get('h3').contains('Are you sure')
      .get('.yes-button').click()
  })
})
