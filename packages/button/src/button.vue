<template>
    <button class="s-button" :class="[
              type? 's-button--'+type:'',
              buttonSize? 's-button--'+buttonSize:'',
             {
                'is-disabled': buttonDisabled,
                'is-loading': loading,
                'is-plain': plain,
                'is-round': round,
                'is-circle': circle
              }
             ]"
            :disabled="buttonDisabled || loading"
            :autofocus="autofocus"
            :type="nativeType"
            @click="handleClick">

        <s-icon v-if="icon!=''" :name="icon"/>
        <span v-if="$slots.default">
           <slot></slot>
        </span>
    </button>
</template>

<script lang='ts'>
    import {computed, inject, defineComponent} from 'vue'
    import {useGlobalConfig} from '../../utils/util'
    import {isValidComponentSize, isValidComponentType, isValidComponentNativeType} from '../../utils/validators'

    import type {PropType, ComponentPropsOptions} from 'vue'

    import {sFormKey, sFormItemKey} from '../../utils/token'
    import type {SFormContext, SFormItemContext} from '../../utils/token'

    type IButtonNativeType = PropType<'button' | 'submit' | 'reset'>

    interface IButtonProps {
        type: string
        size: string
        icon: string
        nativeType: string
        loading: boolean
        disabled: boolean
        plain: boolean
        autofocus: boolean
        round: boolean
        circle: boolean
    }

    type EmitFn = (evt: Event) => void

    export default defineComponent({
        name: 'sButton',
        props: {
            type: {
                type: String as PropType<ComponentType>,
                default: 'default',
                validator: isValidComponentType
            },
            size: {
                type: String as PropType<ComponentSize>,
                default: 'medium',
                validator: isValidComponentSize
            },

            icon: {
                type: String,
                default: '',
            },
            nativeType: {
                type: String as IButtonNativeType,
                default: 'button',
                validator: isValidComponentNativeType,
            },

            loading: Boolean,
            disabled: Boolean,
            plain: Boolean,
            autofocus: Boolean,
            round: Boolean,
            circle: Boolean,

        },

        emits: ['click'],

        setup(props, ctx) {


            const {size, disabled} = props


            const $SWEET = useGlobalConfig()


            let sForm = inject(sFormKey, {} as SFormContext)
            let sFormItem = inject(sFormItemKey, {} as SFormItemContext)


            let buttonSize = computed(() => {
                return size || sFormItem.size || $SWEET.size
            })

            const buttonDisabled = computed(() => {
                return disabled || sForm.disabled
            })


            let handleClick = (e) => {
                ctx.emit('click', e)
            }

            return {
                buttonSize,
                buttonDisabled,
                handleClick
            }
        },
    })
</script>
