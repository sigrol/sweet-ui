## switch组件

#### 基础switch
::: demo
```html
<span style="margin-right: 30px">
    <s-switch v-model="value" @change="change" active-color="#13ce66" inactive-color="#ff4949"></s-switch>
</span>

<span style="margin-right: 30px">
    <s-switch v-model="value2" disabled active-color="#13ce66" inactive-color="#ff4949"></s-switch>
</span>


```
<script setup>
import {ref} from 'vue';
let value = ref(true);
let value2 = ref(false);
let change=(val)=>{
   console.log('value',value.value);
   console.log(val)
};

</script>
:::




#### 文字描述switch
::: demo
```html
<span style="margin-right: 30px">
    <s-switch v-model="value" active-text="开启" inactive-text="关闭" active-color="#13ce66" inactive-color="#ff4949"></s-switch>
</span>
<span style="margin-right: 30px">
    <s-switch v-model="value" inactive-icon-class="sweet-icon-service"  active-icon-class="sweet-icon-remind" active-text="开启" inactive-text="关闭" active-color="#13ce66" inactive-color="#ff4949"></s-switch>
</span>
<span>
    <s-switch v-model="value" width="50" size="medium" inner-inactive-text="ON" inner-active-text="OFF" active-color="#13ce66" inactive-color="#ff4949"></s-switch>
</span>
```
:::




### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| width     | switch宽度   | string/number    |  —   |     —    |
| active-color     | switch 打开时的背景色	   | string/number    |  —   |     —    |
| inactive-color	     | switch 关闭时的背景色	   | string/number    |  —   |     —    |
| inner-active-text     | switch里开启文字   | string    |  —   |     #409EFF|
| inner-inactive-text   | switch里关闭文字   | string    |  —   |#C0CCDA|
| active-text	     | switch 打开时的文字描述	   | string  |   —  |
| inactive-text	     | switch 关闭时的文字描述	   | string    | — | 
| active-icon-class	     | switch 打开时所显示图标的类名，设置此项会忽略 active-text	   | string    | — |    
| inactive-icon-class	     | switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text   | string    | — |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |


### Events
| 事件名称	      | 说明    |回调参数 |
|---------- |-------- |---------- |
| change     | switch 状态发生变化时的回调函数   | 新状态的值    |
