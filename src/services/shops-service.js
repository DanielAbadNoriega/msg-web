import http from './base-api-service'

const create = (shop) => http.post('/shops', shop)

const list = () => http.get('/shops')

const detail = (id) => http.get(`/shops/${id}`)

const remove = (id) => http.delete(`/shops/${id}`)

const service = {
  list,
  detail,
  remove,
  create
}

export default service;