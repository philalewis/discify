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

export const getFilteredCourses = (params) => {
  return fetch(`https://discify-api.herokuapp.com/api/v1/${params}`)
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

export const getSingleCourse = (id) => {
  return fetch(`https://discify-api.herokuapp.com/api/v1/courses/${id}`)
  .then(response => handleError(response))
}

export const startRound = (roundData) => {
  return fetch('https://discify-api.herokuapp.com/api/v1/rounds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      round: roundData
    })
  })
  .then(response => handleError(response))
}

export const scoreAHole = (body, id) => {
  return fetch(`https://discify-api.herokuapp.com/api/v1/rounds/${id}/score_hole`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(response => handleError(response))
}

export const endRound = (id) => {
  return fetch(`https://discify-api.herokuapp.com/api/v1/rounds/${id}/end_round`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => handleError(response))
}
