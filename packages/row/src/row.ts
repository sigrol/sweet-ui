import { defineComponent, computed, h, provide } from 'vue'

export default defineComponent({
    name:'sRow',
    props:{
       tag:{
           type:String,
           default:'div'
       },
        gutter: {
            type: Number,
            default: 0,
        },
        type: {
            type: String,
            default: '',
        },
        justify: {
            type: String,
            default: 'start',
        },
        align: {
            type: String,
            default: 'top',
        },
    },

    setup(props,{slots}){

        provide('SRow', props.gutter)

        const style =computed(()=>{
            const ret={
                display: 'flex',
                flexWrap: 'wrap',
                marginLeft: '',
                marginRight: '',
            }

            ret.marginLeft = `-${props.gutter/2}px`
            ret.marginRight = ret.marginLeft

            return ret
        })
        return ()=>
            h(
                props.tag,
                {
                   class:[
                       's-row',
                       props.justify !== 'start' ? `is-justify-${props.justify}` : '',
                       props.align !== 'top' ? `is-align-${props.align}` : '',
                       props.type === 'flex' ? 's-row--flex' : '',
                   ],
                    style:style.value
                },
                slots.default?.()
            )

    }
})