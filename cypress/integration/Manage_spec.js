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

    cy.visit('http://localhost:3000/manage/')
  });

  it('should be able to add new players to the league', () => {
    cy.get('input').type('Hannah')
      .get('.add-player-btn').click()
  })


})
