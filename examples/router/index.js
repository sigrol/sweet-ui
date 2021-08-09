import {createRouter, createWebHistory} from 'vue-router'



// 引入基础组件
let baseRoutes = [];
let baseFiles = import.meta.glob("../docs/*/*.md")
for (let key in baseFiles) {
    let name = key.replace(/(\.\/|\.md)/g, '').split('/')

    let newKey = name[name.length - 1]

    let data = {
        path: `/${newKey}`,
        name: newKey,
        component: baseFiles[key]
    }

    baseRoutes.push(data)
}


const routes = [

    {
        path: '/',
        redirect: "/index",
    },
    {
        path: '/index',
        name: 'index',
        redirect: "index/introduce",
        component: () => import("@/views/index.vue"),

    },

    {
        path: '/introduce',
        name: 'introduce',
        component: () => import('../docs/introduce.md')
    },
    {
        path: '/install',
        name: "install",
        component: () => import('../docs/install.md')
    },
    {
        path: '/start',
        name: "start",
        component: () => import('../docs/start.md')
    },
    {
        path: '/test',
        name: "test",
        component: () => import('@/views/test.vue')
    },

    ...baseRoutes,


];


export default createRouter({
    history: createWebHistory('/doc/'),
    routes
})


