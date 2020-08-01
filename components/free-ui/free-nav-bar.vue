<template>
	<view class="bg-light">
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
</template>

<script>
	import freeIconButton from './free-icon-button.vue'
	export default {
		props:{
			title:{
				type:[String,Boolean],
				default:false
			}
		},
		components:{
			freeIconButton
		},
		data(){
			return {
				statusBarHeight:0
			}
		},
		mounted() {
			// #ifdef APP-PLUS-NVUE
			this.statusBarHeight = plus.navigator.getStatusbarHeight()
			// #endif
		}
	}
</script>

<style>
</style>
