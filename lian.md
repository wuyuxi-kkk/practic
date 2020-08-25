> vue写的confirm确认框，loading加载中，message提示消息
在vue的模板里引用
`import message from './tips/message/index';
import confirm from './tips/confirm/index';
import loading from './tips/loading/index';`

使用comfirm需要在template中这样定义
<confirm width="500px" title="提示" :visible.sync="confirmVisible" :close-visible="true">