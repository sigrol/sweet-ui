import type {App} from 'vue'
import Message from './src/message'

(Message as any).install=(app:App)=>{
   app.config.globalProperties.$message=Message
}


export default Message