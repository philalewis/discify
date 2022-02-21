const handleError = (response) => {
  if(!response.ok) {
    throw `${response.status} ${response.statusText}`
  } else {
    return response.json()
  }
}

export const getAllCourses = () => {

  return fetch('https://discify-api.herokuapp.com/api/v1/courses')
    .then(response => handleError(response))
}

export const addNewPlayer = (name) => {

  return fetch('https://discify-api.herokuapp.com/api/v1/players', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      player: {
        name: name
      }
    })
  })
  .then(response => handleError(response))
}

export const getAllPlayers = () => {
  
  return fetch('https://discify-api.herokuapp.com/api/v1/players')
    .then(response => handleError(response))
}
