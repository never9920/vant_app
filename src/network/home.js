import {get } from './axios.js'

export function gethomedata() {
    return get('/home/multidata')
}

export function gethomegoods(type, page) {
    return get('/home/data', { type, page })
}