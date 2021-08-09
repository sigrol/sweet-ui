## 按钮组件

#### 基础按钮
::: demo
```html
  <s-button type="default">default</s-button>
  <s-button type="primary">primary</s-button>
  <s-button type="success">success</s-button>
  <s-button type="info">info</s-button>
  <s-button type="warning">warning</s-button>
  <s-button type="danger">danger</s-button>
  
 
```
:::


#### 按钮大小
::: demo
```html
  <s-button type="primary" size="mini">mini</s-button>
  <s-button type="primary" size="small">small</s-button>
  <s-button type="primary" size="medium">medium</s-button>
  <s-button type="primary" size="large">large</s-button>

```
:::



#### 其他按钮
::: demo
```html
  <s-button type="text">text</s-button>
  <s-button plain>plain</s-button>
  <s-button type="primary" plain>plain</s-button>
  <s-button type="warning" round>round</s-button> 
  <s-button type="success" circle icon="sweet-icon-add-select"></s-button> 
  <s-button type="primary" icon="sweet-icon-search">icon</s-button>
  <s-button type="danger" disabled>disabled</s-button>
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| size     | 尺寸   | string  |   mini / small / medium / large            |   medium     |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
