import Cookies from 'js-cookie'

export const getUserToken = () => Cookies.get('userToken') || '~'
export const setUserToken = (token) => Cookies.set('userToken', token)


const baseURL = 'https://shopapi.inloya.com/api/'
export { baseURL }
