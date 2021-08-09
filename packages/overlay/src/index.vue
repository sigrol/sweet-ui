<script lang="ts">
import { createVNode, defineComponent, renderSlot } from 'vue'
import { PatchFlags } from '@sweet/utils/vnode'
export default defineComponent({
  name: "sOverlay",
  props:{
    mask: {
      type: Boolean,
      default: true,
    },
    overlayClass: {
      type: String,
    },
    zIndex: {
      type: Number,
    },
  },


  setup(props, { slots, emit }){

    return ()=> {
      const onMaskClick = () => {
        emit('click')
      }
      return props.mask?
          createVNode(
              'div',
              {
                class:['s-overlay'],
                style:{
                  zIndex:props.zIndex
                },
                onClick:onMaskClick,
              },
              [renderSlot(slots, 'default')],
              PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS,
              ['onClick'],
           ):renderSlot(slots,'default')

    }
  }

})
</script>

<style scoped>

</style>