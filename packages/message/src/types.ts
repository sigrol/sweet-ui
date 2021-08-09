import type {VNode} from 'vue'

export type IType= 'success'|'warning'|'info'|'error'

interface IOptions {
    message?:string|VNode,
    useHTMLString?:boolean,
    customClass?:string,
    center?:boolean,
    type?:IType,
    iconClass?:string,
    duration?:string,
    showClose?:boolean,
    onClose?:()=>void,
    offset?:number,
    zIndex?:number,
}


export type MessageVM = VNode

export type IMessageOptions = IOptions | string

export enum TypeIcon{
    success='success',
    error='error',
    warning='warning'
}


export interface IMessageQueueItem{
    vm:MessageVM,
    $el:HTMLElement
}

export type IMessageQueue = Array<IMessageQueueItem>