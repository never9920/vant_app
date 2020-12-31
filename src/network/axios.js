import axios from 'axios'

axios.defaults.baseURL = 'http://152.136.185.210:8000/api/w6'

axios.interceptors.request.use(config => {
    return config
})


axios.interceptors.response.use(config => {
    return config
})
axios.defaults.timeout = 10000;

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}