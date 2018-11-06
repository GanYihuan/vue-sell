/**
 * @name: 存储数据到缓存
 * @msg: __seller__: "{'id':{'favorite':true}}"
 * @param {id, key, value}
 * @return:
 */
export function saveToLocal(id, key, value) {
  let seller = window.localStorage.__seller__
  // 第一次存储
  if (!seller) {
    seller = {}
    seller[id] = {}
  } else {
    seller = JSON.parse(seller)
    if (!seller[id]) {
      seller[id] = {}
    }
  }
  seller[id][key] = value
  window.localStorage.__seller__ = JSON.stringify(seller)
}

/**
 * @name: 从缓存中读取数据
 * @msg:
 * @param {id, key, def}
 * @return:
 */
export function loadFromLocal(id, key, def) {
  let seller = window.localStorage.__seller__
  if (!seller) {
    return def
  }
  seller = JSON.parse(seller)[id]
  if (!seller) {
    return def
  }
  let ret = seller[key]
  return ret || def
}
