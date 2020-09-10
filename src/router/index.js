import VueRouter from 'vue-router'
import Vue from 'vue'
import constant from "@/constant"
Vue.use(VueRouter)

const Home = () => import("@/components/home/Home")
const Mine = () => import("@/components/mine/Mine")
const Login = () => import("@/components/login/Login")

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', redirect: constant.path.home, meta: { showTabbar: true } },
  { path: constant.path.home, component: Home, meta: { showTabbar: true } },
  { path: constant.path.mine, component: Mine, meta: { showTabbar: true } },
  { path: constant.path.loginPath, component: Login }
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
router.mode = 'history';
export default router
