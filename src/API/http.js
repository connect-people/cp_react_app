import axios from 'axios';

const http = {
    get: (obj) => {
        return axios.get(obj.url, { params: obj.params });
    },
    post: (obj) => {
        return axios.post(obj.url, obj.params);
    },
    put: (obj) => {
        return axios.put(obj.url, obj.params);
    },
    delete: (obj) => {
        return axios.delete(obj.url, obj.params);
    }
}

export default http;