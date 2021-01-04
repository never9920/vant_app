import {get } from './axios.js'

export function getcata() {
    return get('/category')
}

export function getsub(maitKey) {
    return get('/subcategory', { maitKey })
}

export function getsubdetail(miniWallkey, type) {
    return get('/subcategory/detail', { miniWallkey, type })
}