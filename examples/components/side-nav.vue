<template>
  <s-scrollbar >
    <div class="side-nav">
        <div v-for="title in (Object.keys(data))" :key="title" class="group-container">
            <p class="side-nav-title">{{title}}</p>

            <div class="side-nav-items" v-for="nav in data[title]" :key="nav.name">

                <router-link :class="$route.name===nav.name ? 'active' : ''" v-if="nav&nav.name&&nav.desc"
                             :to="{name: nav&nav.name}">{{nav&nav.desc}}
                </router-link>
                <p class="side-nav-group" v-else-if="nav.desc">{{nav.desc}}</p>
                <div v-for="item in nav.items" :key="item.name">
                    <router-link :to="{name: item.name}" :class="$route.name===item.name ? 'active' : ''"
                                 class="slid-nav-component">{{item.desc}}
                    </router-link>
                </div>
            </div>
        </div>

    </div>
  </s-scrollbar>
</template>

<script>
    export default {
        data() {
            return {
                data: {
                    "开发指南": [
                        {

                            "items": [
                                {
                                    "name": "introduce",
                                    "path": "/introduce",
                                    "desc": "介绍",
                                },
                                {
                                    "name": "install",
                                    "path": "/install",
                                    "desc": "安装"
                                },
                                {
                                    "name": "start",
                                    "path": "/start",
                                    "desc": "快速开始"
                                },

                                /* {
                                  "name": "index",
                                  "path": "/",
                                  "type": "pages"
                                },
                                {
                                  "name": "logs",
                                  "path": "/logs",
                                  "desc": "更新日志"
                                } */
                            ]
                        },

                    ],
                    "组件": [
                        {
                            "desc": "Basic",
                            "path": "/component",
                            "items": [
                                {
                                    "desc": "test",
                                    "name": "test",
                                    "path": "/test"
                                },
                                {
                                    "desc": "Icon 图标",
                                    "name": "icon",
                                    "path": "/icon"
                                },
                                {
                                    "desc": "Transition 动画",
                                    "name": "transition",
                                    "path": "/transition"
                                },
                                {
                                    "desc": "Button 按钮",
                                    "name": "button",
                                    "path": "/button"
                                },
                                {
                                    "desc": "scrollbar 滚动条",
                                    "name": "scrollbar",
                                    "path": "/scrollbar"
                                },
                                {
                                    "desc": "Tag 标签",
                                    "name": "tag",
                                    "path": "/tag"
                                },
                                {
                                    "desc": "Input 输入框",
                                    "name": "input",
                                    "path": "/input"
                                },
                                {
                                    "desc": "Switch 开关",
                                    "name": "switch",
                                    "path": "/switch"
                                },
                                {
                                    "desc": "数字动画",
                                    "name": "numAnimate",
                                    "path": "/numAnimate"
                                }
                            ]
                        },
                        {
                            "desc": "Notice",
                            "path": "/component",
                            "items": [
                                {
                                    "desc": "message 消息",
                                    "name": "message",
                                    "path": "/message"
                                },
                                {
                                    "desc": "tip 提示",
                                    "name": "tip",
                                    "path": "/tip"
                                },
                              {
                                "desc": "dialog 模态框",
                                "name": "dialog",
                                "path": "/dialog"
                              },
                            ]
                        },
                        {
                            "desc": "data",
                            "path": "/component",
                            "items": [
                                {
                                    "desc": "tree 树",
                                    "name": "tree",
                                    "path": "/tree"
                                },
                            ]
                        },
                        {
                            "desc": "Views",
                            "path": "/component",
                            "items": [
                                {
                                    "desc": "Layout 布局",
                                    "name": "layout",
                                    "path": "/layout"
                                },
                                {
                                    "desc": "carousel 轮播图",
                                    "name": "carousel",
                                    "path": "/carousel"
                                },
                                {
                                    "desc": "虚拟滚动",
                                    "name": "virtualScroll",
                                    "path": "/virtualScroll"
                                }
                                /* {
                                  "desc": "Showmore 显示更多",
                                  "name": "show-more",
                                  "path": "/showMore"
                                },
                                {
                                  "desc": "Limit 限制输入域",
                                  "name": "limit-textarea",
                                  "path": "/limit"
                                },
                                {
                                  "desc": "metaInfo 三要素",
                                  "name": "meta-info",
                                  "path": "/meta-info"
                                },
                                {
                                  "desc": "alert 警告",
                                  "name": "alert",
                                  "path": "/alert"
                                },
                                {
                                  "desc": "LoadingBar 加载进度条",
                                  "name": "loading-bar",
                                  "path": "/loadingBar"
                                },
                                {
                                  "desc": "skeleton 骨架屏",
                                  "name": "skeleton",
                                  "path": "/skeleton"
                                } */
                            ]
                        }
                    ],

                    "指令": [

                        {
                            "path": "/component",
                            "items": [
                                {
                                    "desc": "文本按行省略",
                                    "name": "lineClamp",
                                    "path": "/lineClamp"
                                },
                                {
                                    "desc": "防抖",
                                    "name": "debounce",
                                    "path": "/debounce"
                                },
                                {
                                    "desc": "节流",
                                    "name": "throttle",
                                    "path": "/throttle"
                                },
                                {
                                    "desc": "复制文本",
                                    "name": "copy",
                                    "path": "/copy"
                                },
                                {
                                    "desc": "图片自适应",
                                    "name": "imgFit",
                                    "path": "/imgFit"
                                },
                                {
                                    "desc": "文字效果",
                                    "name": "font",
                                    "path": "/font"
                                },
                                {
                                    "desc": "倒影",
                                    "name": "reflect",
                                    "path": "/reflect"
                                },
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="less" type="text/less">
    .side-nav {
        display: inline-block;
        margin: 32px 0;
        padding: 0;
        color: #3F536E;
        background-color: #fff;
        z-index: 99;

        .group-container {
            margin-bottom: 32px;
        }

        .side-nav-title {
            padding: 0 24px 8px;
            /*color: #2C405A;*/
            font-size: 16px;
            color: #333;

            font-weight: bold;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .side-nav-items {
            font-size: 14px;
            font-weight: normal;
            line-height: 1.8;

            a {
                display: block;
                position: relative;
                padding: 8px 24px;
                color: #3F536E;
                font-weight: normal;
                line-height: 1.5;
                cursor: pointer;
            }

            .side-nav-group {
                display: block;
                position: relative;
                padding: 6px 0 6px 24px;
                color: #999;
                font-size: 12px;
            }

            .slid-nav-component {
                display: block;
                position: relative;
                padding: 9px 24px 9px 32px;
                color: #616367;
                font-size: 14px;
            }

            .active {
                color: #707AE4;
            }
        }
    }
</style>

