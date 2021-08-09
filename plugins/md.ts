// @ts-nocheck
import path from 'path'
import fs from 'fs'
import marked from 'marked'

const mdToJs = str => {
    const content = JSON.stringify(marked(str))
    return `export default ${content}`
}

export function md() {
    return {
        name: 'vite-md',

        configureServer: function (server) {
            server.middlewares.use((req, res, next) => {
                let importUrl=req.url.split('?')[0]
                if (req.url.includes('.md')) {  // 判断请求的文件是否是md文件

                    req.type = 'js' // 将md文件作为js文件请求返回（用于让浏览器执行js）
                    const filePath = path.join(process.cwd(), importUrl)

                    var data= mdToJs(fs.readFileSync(filePath).toString())

                    res.setHeader('Content-type', 'application/javascript');

                    res.end(data);

                } else {
                    next();  // 跳过中间件
                }
            })

        },


        // transforms: [{  // 用于 rollup // 插件
        //     test: context => context.path.endsWith('.md'),
        //     transform: ({code}) => mdToJs(code)
        // }]
    }
}
