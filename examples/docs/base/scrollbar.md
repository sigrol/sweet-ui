## 滚动条

#### 纵向滚动条
::: demo
```html
<s-scrollbar ref="scrollbar" always height="400px"  @scroll="scroll">
    <p style="height:40px;
    line-height:40px;
    background: #2db7f5;
    margin-bottom: 20px;
    color:#fff;
    text-align: center" 
    v-for="item in 20" @click="aa">{{ item }}</p>
</s-scrollbar>
 
```

<script setup>
import {ref} from 'vue';
  let aa=()=>{
       console.log(44)
    };
  let scrollbar=ref(null);
console.log(scrollbar.value);
  
  let scroll=(val)=>{
     console.log(val)
    };

</script>
:::



#### 横向滚动条
::: demo
```html
<s-scrollbar @scroll="scroll">
    <div  style="display: flex;">
    <p style="flex-shrink: 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: #2db7f5;
    color: #fff;"
    v-for="item in 20" @click="aa">{{ item }}</p>
    </div>
</s-scrollbar>
 
```
:::




### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------ |-------- |
| always     | 滚动条总是显示   | boolean    | —          |    false   |
| height     | 滚动条高度   | string/number  |   —        |   —     |
| native     | 是否使用原生滚动条  | boolean    | — | false   |
| tag     | 视图的元素标签   | string    | — | 	div   |
| view-class	     | 视图的自定义类名   | string    | — |  —  |
| view-style     | 包裹容器的自定义样式	   | string    | — | —    |
| wrap-style  | 是否禁用状态    | string   | —   |  —   |
| wrap-class	  | 包裹容器的自定义类名 | string   |  —  |  —  |
| noresize  | 不响应容器尺寸变化 | boolean   |  —  |  false  |


### Events
| 事件名称      | 说明    | 回调参数    |
|---------- |-------- |---------- |
| scroll     | 滚动时触发的事件   | 滚动距离 { scrollLeft, scrollTop }   


