describe('Manage league component', () => {

  beforeEach(() => {
    cy.intercept('Get', 'https://discify-api.herokuapp.com/api/v1/players',
    { fixture: 'all-players.json'})

    cy.intercept('Get', 'https://discify-api.herokuapp.com/api/v1/players/2020',
    {
      "id": 2020,
      "name": "Hannah",
      "average_score": -4,
      "rounds_played": 119
    })

    cy.intercept('Post','https://discify-api.herokuapp.com/api/v1/players', {
      "id": 2020,
      "name": "Hannah",
      "average_score": 0,
      "rounds_played": 0
    })

    cy.visit('http://localhost:3000/')
      .get('.dropdown-button').click()
      .get('a').eq(1).click()
  });

  it('should be able to add new players to the league', () => {
    cy.get('input').type('Hannah')
      .get('.add-player-btn').click()

    cy.get('.name-button').contains('Hannah')
      .get('a').eq(0).click()

    cy.get('p').contains('Hannah')
  })

  it('should be able to remove a player from the league', () => {
    cy.get('input').type('Hannah')
      .get('.add-player-btn').click()

    cy.get('.name-button').contains('Hannah')
      .get('.name-button').last().click()
      .get('.remove-player-button').click()
      .get('.yes-button').click()
  })

})
