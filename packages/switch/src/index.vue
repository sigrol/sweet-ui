<template>
  <div class="s-switch"
       :class="[
           switchDisabled?'is-disabled':'',
           checked?'is-checked':''
           ]"
       @click.prevent="switchValue"
  >
    <input
        ref="input"
        class="s-switch__input"
        type="checkbox"
        :true-value="activeValue"
        :false-value="inactiveValue"
        :disabled="switchDisabled"
        @change="handleChange"
        @keydown.enter="switchValue"
    >


    <span
        v-if="inactiveIconClass || inactiveText"
        :class="['s-switch__label', 's-switch__label--left', !checked ? 'is-active' : '']"
    >
      <s-icon style="font-size: 25px" v-if="inactiveIconClass" :name="inactiveIconClass"/>
      <span v-if="!inactiveIconClass && inactiveText" :aria-hidden="checked">{{ inactiveText }}</span>
    </span>


    <span ref="core" class="s-switch__core" :style="{ 'width': coreWidth + 'px' }">

      <span class="s-switch__text" v-if="innerSwitchText">{{ innerSwitchText }}</span>

      <div class="s-switch__action">
        <s-icon v-if="loading" name="sweet-icon-add-select"/>
      </div>

    </span>

    <span
        v-if="activeIconClass || activeText"
        :class="['s-switch__label', 's-switch__label--right', checked ? 'is-active' : '']"
    >
       <s-icon style="font-size: 25px" v-if="activeIconClass" :name="activeIconClass"/>
      <span v-if="!activeIconClass && activeText">{{ activeText }}</span>
    </span>

  </div>
</template>

<script lang="ts">
import {defineComponent, ref,computed,inject,nextTick,onMounted} from 'vue'
import { sFormKey } from '@sweet/utils/token'
import type { SFormContext } from '@sweet/utils/token'

export default defineComponent({
  name: "sSwitch",
  props:{
    innerActiveText:{
      type: String,
      default: '',
    },
    innerInactiveText:{
      type: String,
      default: '',
    },
    modelValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    value: {
      type: [Boolean, String, Number],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number,String],
      default: 40,
    },
    activeIconClass: {
      type: String,
      default: '',
    },
    inactiveIconClass: {
      type: String,
      default: '',
    },
    activeText: {
      type: String,
      default: '',
    },
    inactiveText: {
      type: String,
      default: '',
    },
    activeColor: {
      type: String,
      default: '',
    },
    inactiveColor: {
      type: String,
      default: '',
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
    id: {
      type: String,
      default: '',
    },
    loading:{
      type: Boolean,
      default: false,
    },

    size:{
      type: String,
      default: 'mini',
    }

  },

  emits: ['update:modelValue', 'change', 'input'],

  setup(props,ctx){

    const coreWidth = ref(props.width)
    const isModelValue = ref(props.modelValue !== false)

    const checked = ref(isModelValue)

    const input = ref(null)

    const sForm = inject(sFormKey, {} as SFormContext)

    const innerSwitchText = computed((): string => {
      return checked.value?props.innerActiveText:props.innerInactiveText
    })

    const switchDisabled = computed((): boolean => {
      return props.disabled || props.loading ||(sForm || {}).disabled
    })


    const handleChange = (): void => {
      const val = checked.value ? props.inactiveValue : props.activeValue
      ctx.emit('update:modelValue', val)
      ctx.emit('change', val)
      ctx.emit('input', val)
      nextTick(() => {
        input.value.checked = checked.value
      })
    }


   const switchValue=()=>{
      if(!props.disabled){
        checked.value=!checked.value
        handleChange()
      }
    }

    onMounted(() => {
      coreWidth.value = coreWidth.value || 40
      input.value.checked = checked.value
    })


    return {
      input,
      innerSwitchText,
      switchDisabled,
      coreWidth,
      checked,
      handleChange,
      switchValue
    }
  }
})
</script>
