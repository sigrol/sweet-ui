# Input 输入框
----
### 基础用法

基本用法，可以使用 v-model 实现数据的双向绑定。


::: tip
可以直接设置 style 来改变输入框的宽度，默认 100%。
:::


::: demo
```html
<span style="display: inline-block;width:200px;margin-right: 30px">
    <s-input v-model="input" @change="change" placeholder="请输入内容"></s-input>
</span>
<span style="display: inline-block;width:200px">
    <s-input disabled placeholder="请输入内容"></s-input>
</span>
```
<script setup>
 import {ref,watch} from "vue";
 const input = ref(77);

 const input2 = ref(null);

 const input3 = ref(999);
 const input4 = ref(999);
 const input5 = ref(999);
 const textarea = ref(999);

let change=(val)=>{
  console.log('val',val)
};

let changeClear=(val)=>{
  console.log('val',val)
};

watch(input,(newValue, oldValue)=>{
 console.log(oldValue);
 console.log(newValue);
}

)
</script>
:::

### textarea 文本域

::: tip
用于输入多行文本信息，通过将 type 属性的值指定为 textarea。
文本域高度可通过 rows 属性控制
:::

::: demo
```html
<span style="display: inline-block;width:200px;margin-right: 30px">
<s-input v-model="input3" type="text" placeholder="请输入密码">
   <template #prefix>
       <s-icon name="sweet-icon-search"></s-icon>
  </template>
</s-input>
</span>

<span style="display: inline-block;width:200px;margin-right: 30px">
<s-input v-model="input4" type="password" @change="changeClear" clearable placeholder="请输入密码">
</s-input>
</span>
```
:::


### input 

::: tip
用于输入多行文本信息，通过将 type 属性的值指定为 textarea。
文本域高度可通过 rows 属性控制
:::

::: demo
```html
<span style="display: inline-block;margin-right: 30px">
<s-input v-model="input5" placeholder="请输入网站">
   <template #prepend>
       http://
  </template>
</s-input>
</span>
```
:::


### textarea 文本域

::: tip
用于输入多行文本信息，通过将 type 属性的值指定为 textarea。
文本域高度可通过 rows 属性控制
:::

::: demo
```html
<s-input v-model="textarea" type="textarea" @change="change" placeholder="请输入内容"> </s-input>
```
:::



