import { ref } from 'vue';
import "./index.scss";
import { Icon, Swipe, SwipeItem, CountDown } from "vant";
import { getRem } from "/@/utils/utils";
import lock from "./lock";
import * as vue from "vue";
export default {
    setup() {
        const domHeader = () => {
            return (<div class="row-berween header-wrap box-sizing pl20 pr20 fixed left0 top0 w_100">
                <div class="header-left-wrap row-center">
                    <Icon name="wap-nav" color="#fff" size={getRem(50)}/>
                </div>
                <div class="flex1 box-sizing pl20 pr20 pt14">
                    <div class="search-wrap flex1 row-left-center">
                        <div class="pl20 pr20 border-right1">
                            <img class="block header-search-left-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAMAAABpA6zvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTOo8Puo7Peo7Pek7Peo7Pe0/Qek7PvE+SP9SUuo7Peo7Peo7Pus8P+o7Peo7Pek7PZSxd20AAAAQdFJOUwBV8eG+hyGkEQbGmWs/rthNA0r+AAAA5klEQVQ4y63T0RaDIAgAUEDRUjP//2u3CI/T1vJhvM3uVBAANGx5xwLgiwSZ3TI6uMYANSyuc7AUs03CUvgHRMTEflcZ76FezDGJTE/wTYNI9whhDePhNxAcDVveQWDJbgK6Y8FPQDBH2WdgPlZmYNQvj5D7tP8Ap4+2s8lQX56g4AK34bGPshJ8gbl/wrXoASOUDanlgvVFB3g2T5sGZ2on9xCp23BJ8tusPVzw7O/zhuxtHSIZDYGRo891WUemjeVZgsu4kmY8ju8Ifb2f/i3WV+/gzq0Zgs0xba0eHCSsj4zLR91f1fAfiWsqzlEAAAAASUVORK5CYII=" alt=""/>
                        </div>
                        <div class="flex1 pl20 row-left-center">
                            <Icon name="search" color="#999" size={getRem(35)}/>
                            <div class="font28 ml20 relative bottom1" style="color:#999">保暖内衣</div>
                        </div>
                    </div>
                </div>
                <div class="row-center">
                    <div class="color-f font30 relative bottom2">登录</div>
                </div>
            </div>)
        }
        const domBanner = (list) => {
            return (<Swipe class="h_100" autoplay={3000} indicator-color="rgb(200, 37, 25)">
                {() => list.map(v => (
                    <SwipeItem>{() => <img class="w_100 br10" src={v}/>}</SwipeItem>
                ))}
            </Swipe>)
        }
        const domMenu = (list) => {
            return (<div class="flex-wrap flex pb40">
                {list.map(v => (<div class="flex5_1 row-center pt40">
                    <div class="box-sizing pl30 pr30">
                        <img class="block w_100" src={v.icon} alt=""/>
                    </div>
                    <div class="font25" style="color:#666">{v.title}</div>
                </div>))}
            </div>)
        }
        const domActive = (list) => {
            return (<div class="bg-f br10 box-sizing p15">
                <div class="row-left-center">
                    <div class="flex1 row-left-center">
                        <div class="font26">京东秒杀</div>
                        <div class="font26 ml20" style="color:#ff2727">16</div>
                        <img class="active-left-icon ml10" src="//wq.360buyimg.com/wxsq_project/portal/m_jd_index/images/seckill-time-to_1de70c91.png"/>
                        <CountDown class="ml20" time={20000000}>
                            {{
                                default: timeData => {
                                    return (
                                        <div>
                                            <span class="p5 br5 color-f" style="background:#ff6152">{timeData.hours < 10 ? "0" + timeData.hours : timeData.hours}</span>
                                            <span class="ml5 mr5" style="color:#ff6152">:</span>
                                            <span class="p5 br5 color-f" style="background:#ff6152">{timeData.minutes < 10 ? "0" + timeData.minutes : timeData.minutes}</span>
                                            <span class="ml5 mr5" style="color:#ff6152">:</span>
                                            <span class="p5 br5 color-f" style="background:#ff6152">{timeData.seconds < 10 ? "0" + timeData.seconds : timeData.seconds}</span>
                                        </div>
                                    );
                                }
                            }}
                        </CountDown>
                        <div class="flex1 row-right-center">
                            <div class="font25" style="color:#ff6152">更多秒杀</div>
                            <img src="//wq.360buyimg.com/wxsq_project/portal/m_jd_index/images/arrow_rt_2ccb8cd5.png" class="block ml10" style={"width:" + getRem(25) + "px"}/>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    {list.map(v => (
                        <div class="flex6_1 row-center">
                            <div class="box-sizing pl10 pr10">
                                <img src={v.icon} class="w_100"/>
                            </div>
                            <div class="font26" style="color:#ff6152">￥{v.price}</div>
                            <div class="font26" style="color:#999;text-decoration:line-through">￥{v.oldPrice}</div>
                        </div>
                    ))}
                    
                </div>
            </div>)
        }
        const domCard = () => (
            <div>
                <div class="row-left-center box-sizing pl20 pr20">
                    <img class="block w_50" src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg" alt=""/>
                    <img class="block w_50" src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg" alt=""/>
                </div>
                <div class="pt20 pb20 box-sizing pl20 pr20">
                    <img class="block w_100" src="//m.360buyimg.com/mobilecms/s750x100_jfs/t1/111655/4/10853/142323/5ef22455Eb86abfc1/2bf122bb2e87d6e3.png" alt=""/>
                </div>
                <div class="row-left-center bg-f">
                    <div class="flex3_1">
                        <img class="w_100 block" src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/140270/26/14863/20087/5fb50f84E5cae923e/f7aff06fb96177aa.png!q70.jpg" alt=""/>
                    </div>
                    <div class="flex3_1">
                        <img class="w_100 block" src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/136204/2/16409/19393/5fb51011E39c5a386/6e02005b8099fe89.png!q70.jpg" alt=""/>
                    </div>
                    <div class="flex3_1">
                        <img class="w_100 block" src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/127323/31/19224/20403/5fb50f9aEf171ce41/a332f735f3e33de6.png!q70.jpg" alt=""/>
                    </div>
                </div>
            </div>
        )
        const domList = (info) => {
            return (<div>
                {/* 东家小院 */}
                <div class="pt10 pb10 pl20 pr20">
                    <img class="block w_100" src={info.dList.title} alt=""/>
                    <div class="flex flex-wrap box-sizing bg-f">
                        {info.dList.list.map((v, index) => {
                            if (index == 0 || index == 1) {
                                return (<div class={"flex2_1 box-sizing p20 border-bottom1 " + (index == 0 && "border-right1")} style="border-color:#f0f0f0;">
                                    <div class="font32">
                                        <span style="background:linear-gradient(90deg, #45CAFF,#1471FB);color: transparent;-webkit-background-clip:text;">{v.title}</span>
                                    </div>
                                    <div class="font25" style="color:#666">{v.desc}</div>
                                    <div class="flex pt10 pb10">{v.img.map(_v => (
                                        <div class="flex2_1 box-sizing pl15 pr15">
                                            <img src={_v} class="block w_100"/>
                                        </div>
                                    ))}</div>
                                </div>)
                            } else {
                                return (<div class={"flex4_1 box-sizing p20 " + (index < 5 && "border-right1")} style="border-color:#f0f0f0;">
                                    <div class="font32">{v.title}</div>
                                    <div class="font25" style="color:#666">{v.desc}</div>
                                    <div class="box-sizing p15">
                                        <img src={v.img[0]} class="block w_100"/>
                                    </div>
                                </div>)
                            }
                        })}
                    </div>
                </div>
                {/* 每日逛 */}
                <div class="pt10 pb10 pl20 pr20">
                    <img class="block w_100" src={info.mList.title} alt=""/>
                    <div class="flex flex-wrap box-sizing bg-f">{info.mList.list.map((v, index) => (
                        <div class={"flex4_1 box-sizing p20 " + (index < 5 && "border-right1")} style="border-color:#f0f0f0;">
                            <div class="font32">{v.title}</div>
                            <div class="font25" style="color:#666">{v.desc}</div>
                            <div class="box-sizing p15">
                                <img src={v.img[0]} class="block w_100"/>
                            </div>
                        </div>
                    ))}</div>
                </div>
                {/* 推荐 */}
                <div class="p10">
                    <img class="block w_100" src={info.tList.title} alt=""/>
                    <div class="flex flex-wrap box-sizing">{info.tList.list.map((v, index) => (
                        <div class={"flex2_1 box-sizing pl10 pr10 mb20"}>
                            <div class="bg-f br10 box-sizing p20">
                                <img class="block w_100" src={v.img}/>
                                <div class="pt10 pb10">
                                    <div class="ell2 font26">
                                        <img src={v.icon} class="relative bottom3" style={"width:" + getRem(90) + "px"}/>
                                        <span class="ml10">{v.title}</span>
                                    </div>
                                </div>
                                <div class="row-col-berween">
                                    <div style="color:#fa2c19;">
                                        <span class="font24">￥</span>
                                        <span class="font32">{v.price}</span>
                                    </div>
                                    <div class="font22 list-item-right-btn">看相似</div>
                                </div>
                            </div>
                        </div>
                    ))}</div>
                </div>
            </div>)
        }
        return () => (<div class="page">
            <div>
                <div class="banner-bg-wrap absolute w_100 left0 top0"></div>
                {domHeader()}
            </div>
            <div class="relative box-sizing pl20 pr20">
                <div class="header-fill"></div>
                <div class="banner-wrap">{domBanner(lock.bannerList)}</div>
            </div>
            <div class="menu-wrap pl20 pr20 box-sizing">
                <div>{domMenu(lock.menuList)}</div>
            </div>
            <div class="active-wrap box-sizing pl20 pr20">
                <div>{domActive(lock.activeList)}</div>
            </div>
            <div class="card-wrap pt20">
                <div>{domCard()}</div>
            </div>
            <div class="list-wrap box-sizing">
                <div>{domList(lock.list)}</div>
            </div>
            
        </div>)
    }
}