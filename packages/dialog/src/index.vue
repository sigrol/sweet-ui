<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
        name="dialog-fade"
        @after-enter="afterEnter"
        @after-leave="afterLeave"
    >
  <s-overlay
      v-show="visible"
      :mask="modal"
      :overlay-class="modalClass"
      :z-index="zIndex"
      @click="onModalClick"
  >
  <div class="s-dialog"
       :class="[
           {
              'is-fullscreen': fullscreen,
              's-dialog--center': center,
            },
       ]"
       :style="style"
  >

    <div class="s-dialog__header">
      <slot name="title">
          <span class="s-dialog__title">
             {{ title }}
          </span>
      </slot>
      <button
          v-if="showClose"
          aria-label="close"
          class="s-dialog__headerbtn"
          type="button"
          @click="handleClose"
      >
        <s-icon class="s-dialog__close s-icon sweet-icon-close"></s-icon>
      </button>
    </div>

    <template v-if="rendered">
      <div class="s-dialog__body">
        <slot></slot>
      </div>
    </template>
    <div v-if="$slots.footer" class="s-dialog__footer">
      <slot name="footer"></slot>
    </div>

  </div>
  </s-overlay>
    </transition>
  </teleport>

</template>

<script lang="ts">
import {ref,defineComponent,watch,CSSProperties,computed } from "vue";
import { isValidWidthUnit } from '@sweet/utils/validators'
import { UPDATE_MODEL_EVENT } from '@sweet/utils/constants'


const CLOSE_EVENT = 'close'
const OPEN_EVENT = 'open'
const CLOSED_EVENT = 'closed'
const OPENED_EVENT = 'opened'

export default defineComponent({
  name: "sDialog",
  props:{

    appendToBody: {
      type: Boolean,
      default: false,
    },
    title: {
      type:String,
      default:'标题'
    },
    modelValue:{
      type:Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: true,
    },
    modalClass: String,
    width: {
      type: String,
      default: '50%',
      validator: isValidWidthUnit,
    },
    zIndex: {
      type: Number,
    },

    closeOnClickModal: {
      type: Boolean,
      default: true,
    },

    center: {
      type: Boolean,
      default: false,
    },
    top: {
      type: String,
      default:'15vh'
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
  },

  emits: [
    OPEN_EVENT,
    OPENED_EVENT,
    CLOSE_EVENT,
    CLOSED_EVENT,
    UPDATE_MODEL_EVENT,
  ],

  setup(props,ctx){
    let showClose = ref(true)
    let rendered = ref(true)

    const visible = ref(false)
    const closed = ref(false)
    const dialogRef = ref(null)
    const openTimer = ref<TimeoutHandle>(null)
    const closeTimer = ref<TimeoutHandle>(null)
    // const zIndex = ref(props.zIndex || PopupManager.nextZIndex())
    const modalRef = ref<HTMLElement>(null)

    let handleClose=()=>{
      visible.value=false
    }

    function onModalClick() {
      handleClose()
      // if (props.closeOnClickModal) {
      //   handleClose()
      // }
    }

    function afterEnter() {
      ctx.emit(OPENED_EVENT)
    }

    function afterLeave() {
      ctx.emit(CLOSED_EVENT)
      ctx.emit(UPDATE_MODEL_EVENT, false)
      if (props.destroyOnClose) {
        rendered.value = false
      }
    }

    watch(()=>props.modelValue,(newValue)=>{
      visible.value=newValue
    })


    const style = computed(() => {
      const style = {} as CSSProperties
      if (!props.fullscreen) {
        style.marginTop = props.top
        if (props.width) {
          style.width = props.width
        }
      }
      return style
    })


    return {
      showClose,
      handleClose,
      onModalClick,
      afterEnter,
      afterLeave,
      rendered,
      visible,
      closed,
      dialogRef,
      dialogRef,
      style
    }
  }




})
</script>

<style scoped>

</style>