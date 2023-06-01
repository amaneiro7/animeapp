const get = require('lodash/get')
const fetch = require('isomorphic-unfetch')

const BASE_URL = 'https://kitsu.io/api/edge'
const PER_PAGE = 7

const request = (endpoint = '') =>
  fetch(`${BASE_URL}${endpoint}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        var error = new Error(response.statusText)
        error.response = response
        return Promise.reject(error)
      }
    })
    .then(response => response.json())
    .then(json => get(json, 'data',[]))

const fetchPopular = (limit = PER_PAGE) =>
  request(`/anime?page[limit]=${limit}&sort=-user_count`)

const fetchHighestRated = (limit = PER_PAGE) =>
  request(`/trending/anime?limit=${limit}`)

const fetchTrending = (limit = PER_PAGE) =>
  request(`/anime?page[limit]=${limit}&sort=-average_rating`)

module.exports = {
  fetchPopular,
  fetchHighestRated,
  fetchTrending
}