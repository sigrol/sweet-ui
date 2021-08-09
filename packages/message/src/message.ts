import {createVNode, render,nextTick} from 'vue'
import type {IMessageOptions, IMessageQueue, MessageVM} from './types'
import messageComponent from './index.vue'

let instances: IMessageQueue = [];
let seed = 1
const Message = (opts: IMessageOptions = {} as IMessageOptions) => {

    if (typeof opts === "string") {
        opts = {
            message: opts
        }
    }

    let options: IMessageOptions = <IMessageOptions>opts


    let verticalOffset = opts.offset || 20

    instances.forEach(({vm}) => {
        verticalOffset += (vm.el!.offsetHeight || 0) + 16
    })

    verticalOffset += 16
    console.log(instances);
    const id = 'message_' + seed++
    const userOnClose = (options as any).onClose


    options = {
        ...(options as any),
        onClose: () => {
            close(id, userOnClose)
        },
        offset: verticalOffset,
        id,
    }


    let container = document.createElement('div')

    container.className = `container_${id}`

    let vm = createVNode(messageComponent, options as any)

    render(vm, container)


    instances.push({vm, $el: container})

    document.body.appendChild(container)

    return {
     close: options.onClose,
  }
}


export function close(id: string, userOnClose?: ((vm: MessageVM) => void)): void {
    console.log(4444444444)
    const idx = instances.findIndex(({vm}) => {
        const {id: _id} = vm.component.props
        return id === _id
    })

    if (idx === -1) {
        return
    }

    const {vm, $el} = instances[idx]
    if (!vm) return
    userOnClose?.(vm)

    const removedHeight = vm.el.offsetHeight
    render(null, $el)
    nextTick(() => {
        document.body.removeChild($el)
    })

    instances.splice(idx, 1)

    // adjust other instances vertical offset
    const len = instances.length
    if (len < 1) return
    for (let i = idx; i < len; i++) {
        const pos =
            parseInt(instances[i].vm.el.style['top'], 10) - removedHeight - 16

        instances[i].vm.component.props.offset = pos
        instances[i].vm.component.props.vertOffset = pos
    }
}


(['success', 'warning', 'info', 'error'] as const).forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options,
        type,
      }
    } else {
      options.type = type
    }
    return Message(options)
  }
})


export default Message