/**
 * NPM imports
 */
import axios from 'axios';

const host = 'http://localhost:8080'



export function get(url) {//'
    // `axios` function returns promise, you can use any ajax lib, which can
    // return promise, or wrap in promise ajax call
    return axios.get(`${host}${url}`).then((response) => {
        return response.data
    })
    .catch((error) => {
      throw error
    });
  };


  export function post(url,data) {
    // `axios` function returns promise, you can use any ajax lib, which can
    // return promise, or wrap in promise ajax call
    return axios.post(`${host}${url}`,data)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
      throw error
    });
  };