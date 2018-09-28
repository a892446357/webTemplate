import userApi from './user'
import personalApi from './personalCenter'
import shopApi from './shop'

const extend = function (obj1, obj2) {
  for (let i in obj2) {
    obj1[i] = obj2[i]
  }
}

let api = {}
extend(api, userApi)
extend(api, personalApi)
extend(api, shopApi)

export default api
