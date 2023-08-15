//import axios from 'axios'
//const baseUrl = '/bills'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

//const getBill = async obj => {} //access saved bill

export default { setToken }