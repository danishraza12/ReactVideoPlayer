import axios from 'axios'

//Add your key here
const KEY = '';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxresults: 5,
        key: KEY
    }
})
