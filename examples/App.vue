<template>
    <div id="app">
        <mainHeader></mainHeader>
        <div class="container" v-if="!isIndex">
           <sideNav class="nav"></sideNav>
          <s-scrollbar>
            <router-view class="view"></router-view>
          </s-scrollbar>
        </div>
        <router-view class="container" v-else></router-view>
        <!--<mainFooter></mainFooter>-->


        <!--<div class="el-scrollbar__bar is-vertical">-->
            <!--<div class="el-scrollbar__thumb" style="height: 15.0778%; transform: translateY(99.2699%);"></div>-->
        <!--</div>-->
    </div>
</template>

<script>
    import mainHeader from '@/components/header.vue'
    import sideNav from './components/side-nav.vue'
    import mainFooter from './components/footer.vue'
    import {useRoute, useRouter} from 'vue-router'

    import install from './docs/install.md'
    import {defineComponent,reactive,toRefs,watch,onMounted} from 'vue'
    import {initDemo} from '@/dom/demo'


    export default defineComponent({
        name: 'App',
        components: {
            mainHeader,
            sideNav,
            mainFooter,
            install
        },


        setup(){
          let data = reactive({
                init: false,
                isIndex: true,
                modalVisable: true
            })

            const route=useRoute()

            onMounted(() => {

                //  这里模拟数据请求
                setTimeout(() => {
                    data.init = true
                }, 250)
            });


            watch(()=>route.path,()=>{
                data.isIndex = route.name === 'index'
                initDemo()
            })


             return {
                ...toRefs(data)
            }

        }

    })
</script>
