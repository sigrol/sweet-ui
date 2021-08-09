import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'

import 'amfe-flexible/index.js'


import SweetUI from '@sweet/sweet/index'

import '@/assets/iconfont/iconfont.css'
import sIcon from '@/assets/iconfont/iconfont.json'


import '@sweet/theme-default/src/index.scss'
import '@/assets/less/common.less'
import '@/assets/common.scss'

import demoBlock from './components/demo-block.vue'
import '@/demo-styles/index.scss'



const app = createApp(App)
app.use(router)
app.use(SweetUI)




app.component('demo-block', demoBlock)

app.config.globalProperties.$icons=sIcon

router.isReady().then(() => {

  router.afterEach(async route => {
    // await nextTick()
    // const data = title[route.meta.lang]
    // for (let val in data) {
    //   if (new RegExp('^' + val, 'g').test(route.name)) {
    //     document.title = data[val]
    //     return
    //   }
    // }
    document.title = 'Sweet'
    // ga('send', 'event', 'PageView', route.name)
  })

})


app.mount('#app')
