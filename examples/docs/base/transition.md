## 内置过渡动画

Sweet-ui 内应用在部分组件的过渡动画，你也可以直接使用。在使用之前请阅读 [transition 组件文档](https://cn.vuejs.org/v2/api/#transition) 。

### fade 淡入淡出
    提供 `s-fade-in-linear` 和 `s-fade-in` 两种效果。
    

::: demo

```html
<div>
    <button class="s-button" @click="show = !show" v-line-clamp>Click Me {{show}}</button>
<div v-line-clamp>99</div>
    <div style="display: flex; margin-top: 20px; height: 100px;">
     <transition name="s-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
    
      <transition name="s-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
       
    </div>
  </div>
<script>
 import { defineComponent,ref } from 'vue'
 export default defineComponent({
   setup(){
       let show=ref(true)
       return {
           show
       }
   }
 })
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>

```
<script setup>
 import { ref } from 'vue';
    let show=ref(true)
</script>

:::  



::: warning
注意：
:::

::: danger
警告：
:::

::: tip
提示：这是一段提示
:::






## 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| amount | 显示的数字（必须） | Number | — |  |
| time | 持续时间 | Number | — | 1000 |
| start | 开始变化 | Boolean | — | true |
| thousand | 千分位 | Boolean | — | false | 
