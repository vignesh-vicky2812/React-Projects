import axios from 'axios';

const KEY = 'AIzaSyA4yqOZjhCyJ3PVTFZ-VeCZ8NdkIM08JVk'
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

