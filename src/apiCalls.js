
export const getAllCourses = () => {

  return fetch('https://discify-api.herokuapp.com/api/v1/courses')
    .then(response => response.json())
}

export const addNewPlayer = (name) => {

  return fetch('https://discify-api.herokuapp.com/api/v1/players', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      player: {
        name: name
      }
    })
  })
  .then(response => response.json())
}

export const getAllPlayers = () => {
  
  return fetch('https://discify-api.herokuapp.com/api/v1/players')
    .then(response => response.json())
}