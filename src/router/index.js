import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const Home = () => import("@/components/home/Home")
const Mine = () => import("@/components/mine/Mine")

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/mine', component: Mine }
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
router.mode = 'history';
export default router
