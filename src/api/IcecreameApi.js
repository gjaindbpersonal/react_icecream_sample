import _icecreamsbrands from './IcecreamsBrands.json'

const TIMEOUT = 100

export default {
  getIcecreamBrands: (cb, timeout) => setTimeout(() => cb(_icecreamsbrands), timeout || TIMEOUT)
}
