<template>
<div class="s-tree">
  <div class="s-tree-node is-expanded is-focusable" v-for="(tree,index) in treeData">

    <div class="s-tree-node__content" style="padding-left: 0px;"  @click="toggle(tree)">

      <div v-if="isChildren">

          <div v-if="tree.open" class="s-tree-node__content__icon">
            <s-icon style="color: #fff" name="sweet-icon-sami-select"></s-icon>
          </div>

          <div v-else class="s-tree-node__content__icon">
            <s-icon style="color: #fff" name="sweet-icon-add-select"></s-icon>
          </div>

      </div>
      <span class="s-tree-node__label">{{tree.label}}</span>


    </div>

      <s-tree  style="padding-left: 30px;" v-if="isChildren" v-show="tree.open" :tree-data="tree.children" ></s-tree>
  </div>
</div>
</template>

<script lang="ts">
import {defineComponent,computed} from "vue";

export default defineComponent({
  name: "sTree",
  props:{
    treeData:{
      type:Array
    },
  },

  emits:['click'],

  setup(props,ctx){
    let isChildren=computed(()=>{
      return props.treeData&&props.treeData[0].children
    })

    let toggle=(tree)=>{
      tree.open=!tree.open
      ctx.emit('select',tree)
    }

    return {
      toggle,
      isChildren
    }
  }

})
</script>

<style scoped>

</style>