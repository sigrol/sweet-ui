

# Icon 图标
   提供了一套常用的图标集合。  
   

<br>
   
### 使用说明
直接设置类名为 sweet-icon-iconName 来使用即可。例如  



::: demo

```html
    <s-icon name="sweet-icon-home"></s-icon>
    <s-icon name="sweet-icon-favorites"></s-icon>
    <s-icon name="sweet-icon-search"></s-icon>
```
:::  
<br>


### 图标示例
   
<ul class="icon-list">
  <li v-for="item in $icons.glyphs">
    <div>
      <s-icon :name="'sweet-icon-'+item.font_class"></s-icon>
      <div>{{item.font_class}}</div>
    </div>
  </li>
</ul>





