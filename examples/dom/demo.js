import {nextTick} from 'vue'
export function initDemo() {
    nextTick(() => {
        var demoContainer = document.getElementsByClassName('demo-container')
        for (var i = 0; i < demoContainer.length; i++) {
            demoContainer[i].getElementsByClassName('language-html')[0].style.display = 'none'
        }
    })
}

export function changeDemo(e,isExpand) {
    nextTick(() => {
        for (let i in e.path.slice(0,4)) {
            if(e.path[i].className==='docs-demo-wrapper'){
               // e.path[i].getElementsByClassName('language-html')[0].style.transition= '500ms all liner'
               e.path[i].getElementsByClassName('language-html')[0].style.display= isExpand?'block':'none'
            }

        }
    })
}