<template>
<div
     :class="[
         type!='textarea'?'s-input':'s-textarea',
         inputSize ? 's-input--' + inputSize : '',
         {
           'is-disabled': inputDisabled,
           // 'is-exceed': inputExceed,
           's-input-group': $slots.prepend || $slots.append,
           's-input-group--append': $slots.append,
           's-input-group--prepend': $slots.prepend,
           's-input--prefix': $slots.prefix || prefixIcon,
           's-input--suffix': $slots.suffix || suffixIcon||clearable
         }
     ]"
>

  <template v-if="type!='textarea'">
    <div v-if="$slots.prepend" class="s-input-group__prepend">
      <slot name="prepend"></slot>
    </div>
    <input :type="type"
           class="s-input__inner"
           ref="input"
           :placeholder="placeholder"
           :autocomplete="autocomplete"
           :readonly="readonly"
           :disabled="inputDisabled"
           @compositionstart="handleCompositionStart"
           @compositionupdate="handleCompositionUpdate"
           @compositionend="handleCompositionEnd"
           @input="handleInput"
           @focus="handleFocus"
           @blur="handleBlur"
           @change="handleChange"
           @keydown="handleKeydown"
    >

      <!-- 前置内容 -->
      <span v-if="$slots.prefix || prefixIcon" class="s-input__prefix">
        <slot name="prefix"></slot>
        <s-icon
            v-if="prefixIcon"
            :name="prefixIcon"
        ></s-icon>
      </span>

      <!-- 后置内容 -->


      <span v-if="$slots.suffix || suffixIcon||clearable" class="s-input__suffix" @click="handleClear">
        <slot name="suffix"></slot>
        <s-icon
            v-if="suffixIcon||clearable"
            :name="clearable?'sweet-icon-reeor':suffixIcon"
        ></s-icon>
      </span>

  </template>
  <template v-else>
    <textarea
        ref="textarea"
        :disabled="inputDisabled"
        :placeholder="placeholder"
        class="s-textarea__inner"
        :readonly="readonly"
        :style="textareaStyle"
    ></textarea>
  </template>

</div>
</template>

<script lang="ts">
import {defineComponent,ref,computed,inject,shallowRef,nextTick,watch,onMounted} from "vue";
import { sFormKey, sFormItemKey } from '@sweet/utils/token'
import { isObject, useGlobalConfig } from '@sweet/utils/util'
import { UPDATE_MODEL_EVENT, VALIDATE_STATE_MAP,CHANGE_EVENT } from '@sweet/utils/constants'
import isServer from '@sweet/utils/isServer'
import calcTextareaHeight from './calcTextareaHeight'
import type { PropType } from 'vue'

import type { SFormContext, SFormItemContext } from '@sweet/utils/token'
import SIcon from "../../icon/src/index.vue";

type autoSizeProps={
  minRows?:number,
  maxRows?:number,
} | boolean


export default defineComponent({
  name: "sInput",
  components: {SIcon},
  inheritAttrs: false,

  props:{
    modelValue: {
      type: [String, Number],
      default: '',
    },
    type:{
      type:String
    },
    placeholder:{
      type:String,
      default:'请输入'
    },
    size:{
      type:String,
      default:''
    },
    readonly:{
      type:Boolean,
      default:false
    },

    autosize:{
      type:[Object,Boolean] as PropType<autoSizeProps>,
      default:false
    },
    resize: {
      type: String as PropType<'none' | 'both' | 'horizontal' | 'vertical'>,
      validator: (val: string) => ['none', 'both', 'horizontal', 'vertical'].includes(val),
    },

    validateEvent: {
      type: Boolean,
      default: true,
    },
    disabled:{
      type: Boolean,
      default: false,
    },
    prefixIcon:{
      type: String,
      default: '',
    },
    suffixIcon:{
      type: String,
      default: '',
    },
    clearable:{
      type:Boolean,
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'off',
      validator: (val: string) => ['on', 'off'].includes(val),
    },
  },



  emits: [UPDATE_MODEL_EVENT,CHANGE_EVENT,'input', 'focus', 'blur', 'clear',
    'mouseleave', 'mouseenter', 'keydown'],

  setup(props,ctx){

    const modelValue = ref(props.modelValue)
    const hovering = ref(false)
    const focused = ref(false)

    const textarea=ref(null)
    const input=ref(null)

    const _textareaCalcStyle = shallowRef({})


    const $SWEET = useGlobalConfig()



    const sForm = inject(sFormKey, {} as SFormContext)
    const sFormItem = inject(sFormItemKey, {} as SFormItemContext)


    const textareaStyle = computed(() => ({
      ..._textareaCalcStyle.value,
      resize: props.resize,
    }))

    const inputDisabled = computed(() => props.disabled || sForm.disabled)
    const inputOrTextarea = computed(() => input.value || textarea.value)

    const nativeInputValue = computed(() => (props.modelValue === null || props.modelValue === undefined) ? '' : String(props.modelValue))

    const inputSize=computed(()=>{
       return props.size||sFormItem.size||$SWEET.size
    })


    const handleFocus = e => {
      focused.value = true
      ctx.emit('focus', e)
    }

    const handleBlur = e => {
      focused.value = true
      ctx.emit('blur', e)
    }

    const handleInput = e => {
      const { value } = e.target
      if (value === nativeInputValue.value) return
       ctx.emit(UPDATE_MODEL_EVENT, value)
      nextTick(setNativeInputValue)
    }

    const handleChange = e => {
      const { value } = e.target
      ctx.emit(CHANGE_EVENT, value)
    }

    const handleKeydown = e => {
      ctx.emit('keydown', e)
    }

    const handleCompositionStart = e => {
      // console.log('handleCompositionStart',e)
    }

    const handleCompositionUpdate = e => {
      // console.log('handleCompositionUpdate',e)
    }

    const handleCompositionEnd = e => {
      // console.log('handleCompositionEnd',e)
    }



    const resizeTextarea = () => {
      const { type, autosize } = props

      if (isServer || type !== 'textarea') return

      if (autosize) {
        const minRows = isObject(autosize) ? autosize.minRows : void 0
        const maxRows = isObject(autosize) ? autosize.maxRows : void 0
        _textareaCalcStyle.value = calcTextareaHeight(textarea.value, minRows, maxRows)
      } else {
        _textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(textarea.value).minHeight,
        }
      }
    }


   const handleClear=(e)=>{
     ctx.emit(UPDATE_MODEL_EVENT, '')
     ctx.emit('change', '')
     ctx.emit('clear')

    }


    const onMouseLeave = e => {
      hovering.value = false
      ctx.emit('mouseleave', e)
    }

    const onMouseEnter = e => {
      hovering.value = true
      ctx.emit('mouseenter', e)
    }


    const setNativeInputValue = () => {
      const input = inputOrTextarea.value
      console.log(input)
      if (!input || input.value === nativeInputValue.value) return
      input.value = nativeInputValue.value
    }


    watch(() => props.type, () => {
      nextTick(() => {
        setNativeInputValue()
        resizeTextarea()
        // updateIconOffset()
      })
    })

    onMounted(() => {
      setNativeInputValue()
      // updateIconOffset()
      nextTick(resizeTextarea)
    })


    watch(() => props.modelValue, val => {
      nextTick(resizeTextarea)
      if (props.validateEvent) {
        sFormItem.formItemMitt?.emit('s.form.change', [val])
      }
    })




    return {
      inputSize,
      modelValue,
      onMouseLeave,
      onMouseEnter,
      handleFocus,
      handleBlur,
      handleInput,
      handleChange,
      handleKeydown,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      textareaStyle,
      inputDisabled,
      handleClear
    }
  }
})
</script>

<style scoped>

</style>