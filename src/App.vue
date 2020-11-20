<template>
	<div>
		<div class="container">
			<router-view></router-view>
			<div class="tab-bar-fill"></div>
		</div>
		<div class="flex fixed left0 bottom0 w_100 tab-bar-wrap bg-f">
			<div @click="go(item.path)" v-for="(item, index) in tabList" :key="index" class="flex5_1 row-center">
				<img :src="item.title == meta.title ? item.iconOn : item.iconOff" class="block icon">
			</div>
		</div>
	</div>
</template>

<script>
import { alert } from "/@/utils/utils";
export default {
	name: 'App',
	data() {
		return {
			tabList: [
				{path: "/", title: "首页", iconOn: "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png", iconOff: "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png"},
				{path: "/classify", title: "分类", iconOn: "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/48787/24/12910/3390/5d9c4b12Ee63270e4/4481f5b3dbad979d.png", iconOff: "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png"},
				{path: "", title: "京喜", iconOn: "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/70651/38/12417/3194/5d9d3eafE12cde68b/2467c20113c50451.png", iconOff: "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/70651/38/12417/3194/5d9d3eafE12cde68b/2467c20113c50451.png"},
				{path: "", title: "购物车", iconOn: "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png", iconOff: "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png"},
				{path: "", title: "未登录", iconOn: "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/68400/36/12368/3153/5d9c4b13E0e0d80a8/876c40f17d91ce44.png", iconOff: "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/68400/36/12368/3153/5d9c4b13E0e0d80a8/876c40f17d91ce44.png"},
			],
			meta: {
				title: "首页"
			}
		}
	},
	methods: {
		go(path) {
			if (!path) {
				alert("写累了，不写了");
			} else {
				this.$router.push(path);
			}
		}
	},
	watch: {
		$route(val) {
			this.meta.title = val.meta.title;
		}
	}
}
</script>
<style lang="scss" scoped>
	.container{
		min-height:calc(100vh - 100px);
		.tab-bar-fill{
			height:100px;
		}
	}
	.tab-bar-wrap{
		box-shadow:0 -5px 10px #e8e8e8;
	}
	.icon{
		width:120px;
	}
</style>
