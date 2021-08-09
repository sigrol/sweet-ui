import path from 'path';
// import {resolve} form 'path';

import type {UserConfig, Plugin as VitePlugin} from 'vite';
import type {Plugin} from 'rollup';

import utils from './utils/utils'
import striptags from './utils/strip-tags'

import index from './examples/md-loader/index.js'



// import { createVuePlugin } form 'vite-plugin-vue2';
// import tsconfigPaths form 'vite-tsconfig-paths';

// import {loadEnv} form 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from "@vitejs/plugin-vue-jsx";
import viteCompression from 'vite-plugin-compression';


import Markdown from 'vite-plugin-md'
import mdContainer from 'markdown-it-container';

import Voie from 'vite-plugin-voie'
// import ViteComponents from 'vite-plugin-components'

const viteConfig: UserConfig = {
    silent: false,
    /**
     * 服务地址
     * @default 'localhost'
     */
    hostname: 'localhost',
    /**
     * 端口号
     * @default '3000'
     */
    port: 3100,
    /**
     * 运行自动打开浏览器·
     * @default 'false'
     */
    open: false,

    /**
     * 打包输入路径
     * @default 'dist'
     */
    outDir: 'dist',
    /**
     * @default 'false'
     */
    sourcemap: false,
    /**
     * 资源输出路径
     * @default '_assets'
     */
    assetsDir: '_assets',
    /**
     * 静态资源小于该大小将会内联，默认4096kb
     * @default '4096'
     */
    assetsInlineLimit: 4096,
    /**
     * esbuild转换目标。
     * @default 'es2019'
     */
    esbuildTarget: 'es2019',

    // 别名
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "examples"),
            "@sweet": path.resolve(__dirname, "packages"),
        },
    },

    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/],
        }),

        Markdown({
            markdownItOptions: {
                html: true,
                linkify: true,
                typographer: true,
            },
            // A function providing the Markdown It instance gets the ability to apply custom settings/plugins
            markdownItSetup(md) {
                // for example
                md.use(require('markdown-it-anchor'))
                md.use(require('markdown-it-prism'))


                // index()


                md.use(mdContainer, 'demo', {
                    validate(params:any) {
                        return params.trim().match(/^demo\s*(.*)$/)
                    },
                    render(tokens:any, idx:any) {
                        // console.log('idx:',idx)
                        const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
                        if (tokens[idx].nesting === 1) {
                            const description = m && m.length > 1 ? m[1] : ''
                            const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''


                            const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))

                            // console.log(html);
                            return `<demo-block>
                                    ${description ? `<div slot="desc">${md.render(description)}</div>` :
                                     `<div class="demoEle">${html}</div>`}
                                    `
                        }
                        return '</demo-block>'
                    },
                })



                md.use(mdContainer, 'tip')
                md.use(mdContainer, 'danger')
                md.use(mdContainer, 'warning')


            },
            // Class names for the wrapper div
            wrapperClasses: 'markdown-body'
        }),

        Voie({
            extensions: ['vue', 'md'],
        }),

        // ViteComponents({
        //     extensions: ['vue', 'md'],
        //     customLoaderMatcher: path => path.endsWith('.md'),
        // }),


        vueJsx(),

        viteCompression({
            verbose: true,
            disable: false,
            threshold: 1024 * 10,
            algorithm: 'gzip',
            ext: '.gz'
        }),


    ],
    // rollupOutputOptions: {},
    // rollupInputOptions: {
    //     plugins: rollupPlugins,
    // },
};


export default viteConfig;
