import { ref, onMounted } from 'vue';
import { Step, Steps, Button } from 'vant';
export default {
    setup() {
        let active = ref(0);
        let disable = ref(true);
        const next = () => {
            active.value = active.value++ >= 3 ? 0 : active.value++;
        }
        onMounted(() => {
            let index = 0;
            let timer = setInterval(() => {
                index++;
                index > 3 && (clearInterval(timer) || (disable.value = false));
                next();
            }, 500);
        })

        return () => (
            <div class="box-sizing p20">
                <Steps direction="vertical" active={active.value}>{() => (
                    <div>
                        <Step>{() => "写首页"}</Step>
                        <Step>{() => "踩坑"}</Step>
                        <Step>{() => "解决问题"}</Step>
                        <Step>{() => "写累了"}</Step>
                    </div>
                )}</Steps>
                <div class="pt50">
                    <Button disabled={disable.value} onClick={next} block type="primary">{() => "下一步"}</Button>
                </div>
            </div>
        )
    }
}