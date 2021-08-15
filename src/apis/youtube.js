import axios from 'axios'

const KEY = 'AIzaSyCOW9B57DF1fCDai5n3ZzR_p_Z3sWTCBqw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxresults: 5,
        key: KEY
    }
})