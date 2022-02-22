describe('Manage league component', () => {

  beforeEach(() => {
    cy.intercept('Get', 'https://discify-api.herokuapp.com/api/v1/players',
    { fixture: 'all-players.json'})

    cy.intercept('POST','https://discify-api.herokuapp.com/api/v1/players', { fixture: 'all-players.json'})

    cy.visit('http://localhost:3000')
      .get('a').eq(1).click()
  });

  it('should be able to add new players to the league', () => {
    cy.get('input').type('Hannah')
      .get('.add-player-btn').click()
  })


})
