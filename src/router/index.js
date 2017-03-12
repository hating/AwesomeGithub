import Vue from 'vue'
import Router from 'vue-router'
import GlobalUser from "@/page/GlobalUser"
import ChinaUser from "@/page/ChinaUser"
import Beijing from "@/page/Province/Beijing"
import Shanghai from "@/page/Province/Shanghai"
import Guangzhou from "@/page/Province/Guangzhou"
import Shenzhen from "@/page/Province/Shenzhen"
import Hangzhou from "@/page/Province/Hangzhou"
import Chengdu from "@/page/Province/Chengdu"
import JavaScript from "@/page/Repo/JavaScript"
import Java from "@/page/Repo/Java"
import Python from "@/page/Repo/Python"
import Swift from "@/page/Repo/Swift"
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'GlobalUser',
            component: GlobalUser
        },
        {
            path: '/GlobalUser',
            name: 'GlobalUser',
            component: GlobalUser,
        },
        {
            path: '/ChinaUser',
            name: 'ChinaUser',
            component: ChinaUser,
        },
        {
            path: '/Beijing',
            name: 'Beijing',
            component: Beijing,
        },
        {
            path: '/Shanghai',
            name: 'Shanghai',
            component: Shanghai,
        },
        {
            path: '/Guangzhou',
            name: 'Guangzhou',
            component: Guangzhou,
        },
        {
            path: '/Shenzhen',
            name: 'Shenzhen',
            component: Shenzhen,
        },
        {
            path: '/Hangzhou',
            name: 'Hangzhou',
            component: Hangzhou,
        },
        {
            path: '/Chengdu',
            name: 'Chengdu',
            component: Chengdu,
        },
      {
        path: '/JavaScript',
        name: 'JavaScript',
        component: JavaScript,
      },
      {
        path: '/Java',
        name: 'Java',
        component: Java,
      },
      {
        path: '/Python',
        name: 'Python',
        component: Python,
      },
      {
        path: '/Swift',
        name: 'Swift',
        component: Swift,
      },
    ]
})
