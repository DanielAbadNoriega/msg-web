import http from './base-api-service'

const list = () => http.get('/recipes')

const remove = (id) => http.delete(`/recipes/${id}`)


const service = {
  list,
  remove
}

export default service;