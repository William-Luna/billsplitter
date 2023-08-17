//import axios from 'axios'
//const baseUrl = '/bills'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getToken = () => { return token }
//const getBill = async obj => {} //access saved bill

// eslint-disable-next-line import/no-anonymous-default-export
export default { setToken, getToken }