import http from './base-api-service'

const list = () => http.get('/shops')

const detail = (id) => http.get(`/shops/${id}`)

const remove = (id) => http.delete(`/shops/${id}`)

const service = {
  list,
  detail,
  remove
}

export default service;