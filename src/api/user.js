import axios from 'axios'

export const captcha = () => {
  return axios.get("/api/web/captcha/combine?plat=6")
}
export const login = params => { return axios.get(params) }
