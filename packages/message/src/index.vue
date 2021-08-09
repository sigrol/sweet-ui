<template>
    <transition class="s-message-fade">
        <div :class="[
                 's-message',
                 's-message--'+type,
                 center?'is-center':'',
                 showClose?'is-closable':'',
                 customClass,
             ]"
             ref="el"
             :id="id"
             v-show="isShowMessage"
             :style="customStyle"
             @mouseenter="clearTimer"
             @mouseleave="startTimer"
        >
            <s-icon class="s-message__icon" :name="icon"></s-icon>
            <slot>
                <p v-if="!useHTMLString" class="s-message__content">
                    {{message}}
                </p>
                <p v-else v-html="message" class="s-message__content"></p>
            </slot>

        </div>
    </transition>
</template>

<script lang="ts">
    import sIcon from '@sweet/icon'
    import {defineComponent, PropType, computed, ref, onMounted,watch,getCurrentInstance,render} from 'vue'
    import {IType, MessageVM,TypeIcon} from './types'

    export default defineComponent({
        name: "sMessage",
        components: {sIcon},
        props: {
            message: {
                type: [String, Object] as PropType<string | MessageVM>,
                default: ''
            },
            useHTMLString: {
                type: Boolean,
                default: false
            },
            customClass: {
                type: String,
                default: ''
            },
            center: {
                type: Boolean,
                default: false
            },

            type: {
                type: String as PropType<IType>,
                default: 'info'
            },

            iconClass: {
                type: String,
                default: ''
            },

            duration: {
                type: Number,
                default: 3000
            },

            offset: {
                type: Number,
                default: 20
            },
            zIndex: {
                type: Number,
                default: 10
            },
            showClose: {
                type: Boolean,
                default: ''
            },
            onClose: {
                type: Function as PropType<() => void>,
            },
            id: { type: String, default: '' },
        },
        setup(props) {

            let isShowMessage = ref(false)
            let timer = ref(null)
            let closed = ref(false)
            let el = ref(null)

            let instance = getCurrentInstance()



            onMounted(() => {
                isShowMessage.value = true
                startTimer()
            })

            let close = () => {
                closed.value=true
                timer.value = null
            }


            let startTimer = () => {
                if (props.duration > 0) {
                    if (!closed.value) {
                        timer.value = setTimeout(() => {
                            close()
                        }, props.duration)
                    }
                }
            }

            let clearTimer=()=>{
                clearTimeout(timer.value)
                timer.value = null
            }


            const icon = computed(() => {
                if (props.iconClass !== '') {

                    return props.iconClass

                } else {

                    let type = props.type

                    if (type==TypeIcon[type]) {
                        return `sweet-icon-${type}-fill`
                    }

                    return 'sweet-icon-prompt-fill'
                }
            })


            const customStyle = computed(() => {
                return {
                    top: `${props.offset}px`,
                    zIndex: props.zIndex,
                }
            })


            watch(closed,(newVal,oldVal)=>{
               if(newVal){
                   console.log(333)
                  isShowMessage.value = false
                   destroyElement()
               }
            })


           function destroyElement(){
                console.log(555)
                isShowMessage.value = false
                props.onClose()
            }

            return {
                customStyle,
                isShowMessage,
                icon,
                close,
                clearTimer,
                startTimer,
                closed,
                el
            }
        }
    })
</script>

<style scoped>

</style>