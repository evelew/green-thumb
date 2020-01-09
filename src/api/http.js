import axios from 'axios'

const httpClient = axios.create({
  baseURL:
    'https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service'
})

const request = options => {
  const onSuccess = response => response.data

  const onError = error => {
    if (error.response.status === 500) {
      throw error
    }

    return Promise.reject(error)
  }

  return httpClient(options)
    .then(onSuccess)
    .catch(onError)
}

export default request
