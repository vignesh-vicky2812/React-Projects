import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID KfWLU7fy4CfN__Pp2ql67u9h2HXLhCU4ctJi9rIxgvo'
    }

});