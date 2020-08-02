<template>
	<view>
		<view class="bg-light" :class="fixed?'fixed-top':''">
			<!-- 状态栏 -->
			<view :style="'height:'+statusBarHeight+'px'"></view>
			<!-- 导航 -->
			<view class="w-100 flex align-center justify-between" style="height: 90rpx;">
				<!-- 左边 -->
				<view class="flex align-center">
					<!-- 标题 -->
					<text class="font-md ml-3" v-if="title">{{getTitle}}</text>
				</view>
				<!-- 右边 -->
				<view class="flex align-center">
					<free-icon-button :icon="'\ue6e3'" @click="search"></free-icon-button>
					<free-icon-button :icon="'\ue682'" @click="openExtend"></free-icon-button>
				</view>
			</view>
		</view>
		<!-- 占位 -->
		<view :style="fixedStyle"></view>

		<!-- 扩展菜单 -->
		<free-popup ref="extend" :bodyWidth="320" :bodyHeight="525" bodyBgColor="bg-dark" transformOrigin="right top">
			<view class="flex flex-column" style="width: 320rpx;box-shadow: 0 0 5px #888888;height: 525rpx;" elevation="5px">

				<view class="flex align-center flex-1" hover-class="bg-hover-dark" @click="clickEvent(item.event)" v-for="(item,index) in menus"  :key="index" >
					<text class="iconfont font-md text-white pl-3 pr-2">{{item.icon}}</text>
					<text class="font-md text-white flex">{{item.name}}</text>
				</view>
			</view>
		</free-popup>
	</view>
</template>

<script>
	import freeIconButton from './free-icon-button.vue'
	import freePopup from '@/components/free-ui/free-popup.vue'
	export default {
		props: {
			title: {
				type: [String, Boolean],
				default: false
			},
			fixed: {
				type: Boolean,
				default: true
			},
			noreadnum: {
				type: Number,
				default: 0
			}
		},
		components: {
			freeIconButton,
			freePopup
		},
		data() {
			return {
				statusBarHeight: 0, // 状态栏高度
				navBarHeight: 0, // 占位高度
				menus: [{
						name: "发起群聊",
						event: "",
						icon:"\ue633"
					},
					{
						name: "添加好友",
						event: "",
						icon:"\ue65d"
					},
					{
						name: "扫一扫",
						event: "",
						icon:"\ue614"
					},
					{
						name: "收付款",
						event: "",
						icon:"\ue66c"
					},
					{
						name: "帮助与反馈",
						event: "",
						icon:"\ue61c"
					}
				]
			}
		},
		mounted() {
			// #ifdef APP-PLUS-NVUE
			this.statusBarHeight = plus.navigator.getStatusbarHeight()
			// #endif
			this.navBarHeight = this.statusBarHeight + uni.upx2px(90)
		},
		computed: {
			fixedStyle() {
				return `height:${this.navBarHeight}px`
			},
			getTitle() {
				let noreadnum = this.noreadnum > 0 ? `(${this.noreadnum})` : ""
				return this.title + noreadnum;
			}
		},
		methods: {
			search() {

			},
			openExtend() {
				this.$refs.extend.show(uni.upx2px(415),uni.upx2px(100))
			},
			clickEvent(){
				
			}
		}
	}
</script>

<style>
</style>
