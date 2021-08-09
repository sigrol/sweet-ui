<style>
  .w__tag{
    margin-right: 10px;
  }
</style>

# 数字动画
----
### 基础用法


::: demo
```html

  <s-num-animate :amount="561512111"></s-num-animate>

```
:::

### 千分位

::: demo
```html

  <s-num-animate :amount="123456789.123" thousand></s-num-animate>

```
:::


### 持续时间

::: demo
```html
  <s-num-animate :amount="123456789.123" :time="5000" thousand></s-num-animate>

```
:::


### 开始控制

::: demo
```html
  <div>
    <s-num-animate :amount="amountData" :time="5000" thousand :start="addNumStart"></s-num-animate>
  </div>
  <s-button @click="handleStart">开始</s-button>
```
<script setup>
import {ref} from 'vue';
let addNumStart = ref(false);
let amountData = ref(123456789.123);

    let handleStart=() => {
        addNumStart.value = !addNumStart.value
    };

</script>

:::





## 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| amount | 显示的数字（必须） | Number | — |  |
| time | 持续时间 | Number | — | 1000 |
| start | 开始变化 | Boolean | — | true |
| thousand | 千分位 | Boolean | — | false |


