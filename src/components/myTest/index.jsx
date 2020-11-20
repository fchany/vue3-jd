import { defineComponent, render } from "vue";
import common from "/@/utils/common";
export default defineComponent({
    setup() {
        let {list} = common();
        return () => (
            <div>
                <div>myTest</div>
                <div>{list.value.length}</div>
            </div>
        )
    }
})