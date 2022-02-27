describe('Manage league component', () => {

  beforeEach(() => {
    cy.intercept('Get', 'https://discify-api.herokuapp.com/api/v1/players',
    { fixture: 'all-players.json'})

    cy.intercept('Post','https://discify-api.herokuapp.com/api/v1/players', {
      "id": 1,
      "name": "Hannah",
      "average_score": 0,
      "rounds_played": 0
    })

    cy.visit('http://localhost:3000/')
      .get('a').eq(1).click()
  });

  it('should be able to add new players to the league', () => {
    cy.get('input').type('Hannah')
      .get('.add-player-btn').click()

    cy.get('p').eq(4).contains('Hannah')
      .get('.home-btn').click()

    cy.get('p').eq(4).contains('Hannah')
  })

  it('should be able to remove a player from the league', () => {

  })

})
