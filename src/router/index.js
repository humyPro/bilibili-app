import VueRouter from 'vue-router'
import Vue from 'vue'
import {path} from "@/constant"
Vue.use(VueRouter)

const Home = () => import("@/components/home/Home")
const Mine = () => import("@/components/mine/Mine")
const Login = () => import("@/components/login/Login")
const News = () => import("@/components/news/News")
const Channel = () => import("@/components/channel/Channel")
const Vip = () => import("@/components/vip/Vip")

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', redirect: path.home, meta: { showTabbar: true } },
  { path: path.home, component: Home, meta: { showTabbar: true } },
  { path: path.mine, component: Mine, meta: { showTabbar: true } },
  { path: path.channel, component: Channel, meta: { showTabbar: true } },
  { path: path.vip, component: Vip, meta: { showTabbar: true } },
  { path: path.news, component: News, meta: { showTabbar: true } },
  { path: path.loginPath, component: Login }
]
const router = new VueRouter({
  mode:'history',
  routes // (缩写) 相当于 routes: routes
})
router.mode = 'history';
export default router
