<template>
  <span>{{ num }}</span>
</template>

<script lang="ts">
import {ref, defineComponent, watch} from "vue";

export default defineComponent({
  name: "sNumAnimate",
  props: {
    //只需要传递一个金额参数
    amount: {
      type: Number,
      required: true,
    },
    time: {
      type: Number,
      default: 1000
    },
    start: {
      type: Boolean,
      default: true
    },
    thousand: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    let num = ref(0)

    let thousandFunc = (number: number, status: boolean): any => {
      //(num+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');//千分位正则写法
      return status ? number.toLocaleString() : number
    }

    watch(() => props.start, (newVal) => {
          let type = props.amount > 0 ? "add" : "sub"
          if (props.amount && newVal) {
            let numInit = 0
            let changeNum = props.amount / (props.time / 10)
            let t = setInterval(() => {
              numInit += changeNum
              if (type === "add" && numInit >= props.amount) {

                clearInterval(t)
                num.value = thousandFunc(props.amount, props.thousand)

              } else if (type === "sub" && numInit <= props.amount) {

                clearInterval(t)
                num.value = thousandFunc(props.amount, props.thousand)

              } else {
                num.value = thousandFunc(Math.round(numInit), props.thousand)
              }
            }, 10)
          }
        },
        {
          immediate: true
        }
    )


    return {
      num,
      thousandFunc
    }


  },

});
</script>