import {get } from './axios.js'

export function getdetail(iid) {
    return get('/detail', { iid })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodscount = shopInfo.cGoods
    }
}

export class Goodsparam {
    constructor(info, rule) {
        this.image = info.image ? images[0] : '';
        this.infos = info.set;
        this.sizes = rule ? rule.tables : [];
    }
}

export function getrecommend() {
    return get('/recommend')
}