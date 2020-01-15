import request from './http'

export const fetchData = ({ sunlight, water, pet }) => {
  return request({
    method: 'GET',
    url: `?sun=${sunlight}&water=${water}&pets=${pet}`,
  })
}
