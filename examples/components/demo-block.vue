<template>
  <div class="docs-demo-wrapper" @mouseenter="mouseenter" @mouseleave="mouseleave">
      <div class="demo-container" style="height: 100%">
        <!--:style="{height:demoHeight }"-->
        <div>
          <div class="docs-demo docs-demo--expand">
            <div v-if="$slots.default" class="highlight-wrapper">
              <slot></slot>
            </div>
            <!--<div class="highlight-wrapper">-->
              <!--<slot name="highlight"></slot>-->
            <!--</div>-->
          </div>
        </div>
      </div>
    <span class="docs-trans docs-demo__triangle" @click="toggle">
      <transition name="text-slide">
        <span v-show="isPlayText">{{isExpand ? '隐藏代码' : '显示代码'}}</span>
      </transition>
      <s-icon :name="isExpand ?'sweet-icon-arrow-up':'sweet-icon-arrow-down'"></s-icon>
    </span>
  </div>
</template>

<script>
  import {defineComponent,reactive,toRefs,computed} from 'vue'
  import {changeDemo} from '@/dom/demo'
  export default defineComponent({


    setup(){
      let data= reactive({
        isExpand: false,
        isPlayText: false,
        demoHeight: 0
      })

     let toggle=(e) => {
        data.isExpand = !data.isExpand;
        changeDemo(e,data.isExpand)
      };

      let mouseenter=()=>{
        data.isPlayText=true
      }
      let mouseleave=()=>{
        data.isPlayText=false
      }

      const demoHeight = computed(() => {
        return data.isExpand ? 'auto' : '96px'
      })


      return {
        ...toRefs(data),
        toggle,
        mouseenter,
        mouseleave,
        demoHeight
      }
    },

  });
</script>

<style lang="scss" type="text/less">
  .docs-demo-wrapper{
    width:100%;
    border: 1px solid #e2ecf4;
    border-radius: 4px;
    background-color: #fff;

    &:hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
    }
  }
  .demo-container {
    transition: max-height .3s ease;
    overflow: hidden;
  }
  .docs-demo {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    font-size: 14px;
    background-color: #F7F7F7;
    /*border: 1px solid #e2ecf4;*/
    /*border-top: none;*/
    /*border-top: none;*/
    pre code {
      font-family: Consolas,Menlo,Courier,monospace;
      line-height: 22px;
      border: none;
    }
  }
  .language-html{
    border-bottom:1px solid #e2ecf4;
    transition: 5000ms all linear;
    background: #2db7f5;
  }
  .docs-trans {
    width: 100%;
    text-align: center;
    color: #409EFF;
    font-size: 12px;
    padding: 10px 0;
    background-color: #FAFBFC;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;


      & .text-slide-enter,
      & .text-slide-leave-active {
        opacity: 0;
        transition: 180ms all linear;
        transform: translateX(10px);
      }
  }

  .docs-demo__code,
  .highlight-wrapper,
  .docs-demo__meta {
    /*padding: 0 20px;*/
    overflow-y: auto;
  }

  .docs-demo__code {
    border-bottom: 1px solid #eee;
  }
  .docs-demo.docs-demo--expand .docs-demo__meta {
    border-bottom: 1px dashed #e9e9e9;
  }

  .docs-demo.docs-demo--expand .docs-demo__triangle {
    width:100%;
    transform: rotate(180deg);
  }

  .highlight-wrapper {
    display: none;

    p,
    pre {
      margin: 0;
    }

    .hljs {
      padding: 0;
    }
  }

  .docs-demo.docs-demo--expand .highlight-wrapper {
    display: block;
  }

  .docs-demo__code__mobi {
    height: 620px;
    margin: 20px 0;
  }

  .docs-demo__code__mobi__header {
    border-radius: 4px 4px 0 0;
    background: -webkit-linear-gradient(rgba(55,55,55,.98),#545456);
    background: linear-gradient(rgba(55,55,55,.98),#545456);
    text-align: center;
    padding: 8px;

    img {
      width: 100%;
    }

    .url-box {
      height: 28px;
      line-height: 28px;
      color: #fff;
      padding: 0 3px;
      background-color: #a2a2a2;
      margin: 10px auto 0;
      border-radius: 4px;
      white-space: nowrap;
      overflow-x: auto;
    }
  }

  .docs-demo__code__mobi__content {
    iframe {
      width: 100%;
      border: 0;
      height: 548px;
    }
  }
</style>

