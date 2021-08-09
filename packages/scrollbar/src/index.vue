<template>
  <div class="s-scrollbar">
    <div
        ref="wrap"
        :class="[
        wrapClass,
        's-scrollbar__wrap',
        native ? '' : 's-scrollbar__wrap--hidden-default',
      ]"
        :style="style"
        @scroll="handleScroll"
    >
      <component
          :is="tag"
          ref="resize"
          :class="['s-scrollbar__view', viewClass]"
          :style="viewStyle"
      >
        <slot></slot>
      </component>
    </div>
    <template v-if="!native">
      <bar :always="always" :move="moveX" :size="sizeWidth" />
      <bar :always="always" vertical :move="moveY" :size="sizeHeight" />
    </template>
  </div>
</template>

<script lang="ts">
import {
  addResizeListener,
  removeResizeListener,
} from '@sweet/utils/resize-event'
import scrollbarWidth from '@sweet/utils/scrollbar-width'
import { toObject } from '@sweet/utils/util'
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount,
  nextTick,
  provide,
  computed,
} from 'vue'
import Bar from './bar'

export default defineComponent({
  name: 'sScrollbar',

  components: { Bar },

  props: {
    always:{
      type:Boolean,
      default: false,
    },
    height:{
      type:[String, Array],
      default: '',
    },
    native: {
      type: Boolean,
      default: false,
    },
    wrapStyle: {
      type: [String, Array],
      default: '',
    },
    wrapClass: {
      type: [String, Array],
      default: '',
    },
    viewClass: {
      type: [String, Array],
      default: '',
    },
    viewStyle: {
      type: [String, Array],
      default: '',
    },
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div',
    },
  },

  setup(props,ctx) {
    const sizeWidth = ref('0')
    const sizeHeight = ref('0')
    const moveX = ref(0)
    const moveY = ref(0)
    const wrap = ref(null)
    const resize = ref(null)

    provide('scroll-bar-wrap', wrap)


    const handleScroll = () => {
      if (!props.native) {
        moveY.value = (wrap.value.scrollTop * 100) / wrap.value.clientHeight
        moveX.value = (wrap.value.scrollLeft * 100) / wrap.value.clientWidth
      }
    }



    const update = () => {
      if (!wrap.value) return

      const heightPercentage =
          (wrap.value.clientHeight * 100) / wrap.value.scrollHeight
      const widthPercentage =
          (wrap.value.clientWidth * 100) / wrap.value.scrollWidth

      sizeHeight.value = heightPercentage < 100 ? heightPercentage + '%' : ''
      sizeWidth.value = widthPercentage < 100 ? widthPercentage + '%' : ''
    }

    onMounted(() => {
      if (props.native) return
      nextTick(update)
      !props.noresize && addResizeListener(resize.value, update)
    })

    onBeforeUnmount(() => {
      if (props.native) return
      !props.noresize && removeResizeListener(resize.value, update)
    })
    const gutter = computed(() => {
      return scrollbarWidth()
    })
    const style = computed(() => {
      if(props.native){
        const gutter = scrollbarWidth()
      }else {
        const gutter = 7
      }

      let style = props.wrapStyle
      if (gutter) {
        const gutterWith = `-${gutter}px`
        // const gutterStyle = `margin-bottom: ${gutterWith}; margin-right: ${gutterWith};height:${props.height}`
        const gutterStyle = `margin-bottom: ${gutterWith}; margin-right: ${gutterWith};height:${props.height}`
        if (Array.isArray(props.wrapStyle)) {
          style = toObject(props.wrapStyle)
          style.marginRight = style.marginBottom = gutterWith
        } else if (typeof props.wrapStyle === 'string') {
          style += gutterStyle
        } else {
          style = gutterStyle
        }
      }
      return style
    })
    return {
      moveX,
      moveY,
      sizeWidth,
      sizeHeight,
      style,
      gutter,
      wrap,
      resize,
      update,
      handleScroll,
    }
  },
})
</script>
