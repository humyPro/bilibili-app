import axios from 'axios'

export const captcha = () => { return axios.get("http://passport.bilibili.com/web/captcha/combine?plat=6") }
export const login = params => { return axios.get(params) }
