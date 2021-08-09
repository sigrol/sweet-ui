# carousel 轮播
----
### 基础使用

::: demo

```html
<div style="width:400px">
<s-carousel height="150px" :autoplay="false">
    <s-carousel-item v-for="item in 4" :key="item">
        <div style="width: 100%; line-height: 150px;opacity: 0.75;font-size:18px;background: #409EFF;color: white;display: flex;justify-content: center;align-items: center">
            {{item}}
        </div>
    </s-carousel-item>
</s-carousel>
</div>
```
:::  
<br>


### card卡片
::: demo

```html
<div style="width:600px">
 <s-carousel height="200px" type="card" >
    <s-carousel-item v-for="item in 6" :key="item">
        <div style="width: 100%; line-height: 200px;font-size:18px;background: #409EFF;color: white;display: flex;justify-content: center;align-items: center">{{item}}</div>
  </s-carousel-item>
</s-carousel>
</div>
```
:::  
<br>



### 纵向
::: demo

```html
<div style="width:400px">
    <s-carousel height="150px" direction="vertical">
        <s-carousel-item v-for="item in 4" :key="item">
            <div style="width: 100%; line-height: 150px;opacity: 0.75;font-size:18px;background: #409EFF;color: white;display: flex;justify-content: center;align-items: center">{{item}}</div>
        </s-carousel-item>
    </s-carousel>
</div>
 
```
:::  
<br>

### Carousel Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | 高度 | string | — | — |
| initial-index | 初始状态激活的轮播的索引，从 0 开始 | number | — | 0 |
| trigger | 指示器的触发方式 | string | click | — |
| autoplay | 是否自动切换 | boolean | — | true |
| interval | 自动切换的时间间隔，单位为毫秒 | number | — | 3000 |
| indicator-position | 指示器的位置 | string | outside/none | — |
| arrow | 切换箭头的显示时机 | string | always/hover/never | hover |
| type | 类型 | string | card | — |
| loop | 是否循环 | boolean | - | true |
| direction | 方向 | string | horizontal/vertical | horizontal |

### Carousel Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 切换时触发 | 目前激活的索引，原幻灯片的索引 |

### Carousel Methods
| 方法名      | 说明          | 参数 |
|---------- |-------------- | -- |
| setActiveItem | 手动切换 | 需要切换的索引，从 0 开始；或相应 `s-carousel-item` 的 `name` 属性值 |
| prev | 切换至上一张 | — |
| next | 切换至下一张 | — |

### Carousel-Item Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 名字，可用作 `setActiveItem` 的参数 | string | — | — |
| label | 示器的文本 | string | — | — |
