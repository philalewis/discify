

export const getAllCourses = () => {

  return fetch('https://discify-api.herokuapp.com/api/v1/courses')
    .then(response => response.json())
}
