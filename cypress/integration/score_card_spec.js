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
      .get('.minus-btn').eq(0).click()
      .get('p').contains('2')
      .get('.plus-btn').eq(1).click()
      .get('p').contains('4')
      .get('.next-hole-btn').click()
      .get('.next-hole-btn').click()
      .get('.next-hole-btn').click()
      .get('.next-hole-btn').click()
      .get('.next-hole-btn').click()
      .get('.next-hole-btn').click()
      .get('.next-hole-btn').click()
      .get('.next-hole-btn').click()
      .get('.end-round-btn').click()

    cy.get('.round-par')
    cy.get('.round-date')
    cy.get('h2').contains('')
    cy.get('h3').eq(0).contains('Phil')
    cy.get('p').eq(3).contains('total score')
    cy.get('p').eq(4).contains('score')
    cy.get('h3').eq(1).contains('Evan')
    cy.get('p').eq(5).contains('total score')
    cy.get('p').eq(6).contains('score')
  })

})
