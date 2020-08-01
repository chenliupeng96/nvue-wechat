<template>
	<view >
		<view class="bg-light" :class="fixed?'fixed-top':''">
			<!-- 状态栏 -->
			<view :style="'height:'+statusBarHeight+'px'"></view>
			<!-- 导航 -->
			<view class="w-100 flex align-center justify-between" style="height: 90rpx;">
				<!-- 左边 -->
				<view class="flex align-center">
					<!-- 标题 -->
					<text class="font-md ml-3" v-if="title">{{title}}</text>
				</view>
				<!-- 右边 -->
				<view class="flex align-center">
					<free-icon-button :icon="'\ue6e3'"></free-icon-button>
					<free-icon-button :icon="'\ue682'"></free-icon-button>
				</view>
			</view>
		</view>
		<!-- 占位 -->
		<view :style="fixedStyle"></view>
	</view>
</template>

<script>
	import freeIconButton from './free-icon-button.vue'
	export default {
		props:{
			title:{
				type:[String,Boolean],
				default:false
			},
			fixed:{
				type:Boolean,
				default:true
			}
		},
		components:{
			freeIconButton
		},
		data(){
			return {
				statusBarHeight:0,// 状态栏高度
				navBarHeight:0 // 占位高度
			}
		},
		mounted() {
			// #ifdef APP-PLUS-NVUE
			this.statusBarHeight = plus.navigator.getStatusbarHeight()
			// #endif
			this.navBarHeight = this.statusBarHeight + uni.upx2px(90)
		},
		computed:{
			fixedStyle(){
				return `height:${this.navBarHeight}px`
			}
		}
	}
</script>

<style>
</style>
