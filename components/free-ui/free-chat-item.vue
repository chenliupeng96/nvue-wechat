<template>
	<view>
		<!-- 时间显示 -->
		<view v-if="showTime" class="flex align-center justify-center pb-4 pt-2">
			<text class="font-sm text-light-muted">{{showTime}}</text>
		</view>
		<!-- 聊天气泡 -->
		<view class="flex align-start position-relative mb-3" :class="!isself?'justify-start':'justify-end'">
			
			<!-- 好友 -->
			<template v-if="!isself">
				<free-avatar size="70" :src="item.avatar"></free-avatar>
				<text class="iconfont text-white font-md position-absolute chat-left-icon">&#xe609;</text>
			</template>
			
			<div class="p-2 rounded " :class="isself?'bg-chat-item mr-3':'bg-white ml-3'"  style="max-width:500rpx;">
				<text class="font-md">{{item.data}}</text>
			</div>
			
			<!-- 本人 -->
			<template v-if="isself">
				<text class="iconfont text-chat-item font-md position-absolute chat-right-icon">&#xe640;</text>
				<free-avatar size="70" src="/static/images/demo/demo6.jpg"></free-avatar>
			</template>
			
		</view>
	</view>
</template>

<script>
	import freeAvatar from '@/components/free-ui/free-avatar.vue'
	import $T from '@/common/free-lib/time.js'
	export default {
		components:{
			freeAvatar
		},
		props:{
			item:Object,
			index:Number,
			pretime:[Number,String], // 上一条信息的时间戳 
		},
		computed:{
			// 是否是本人
			isself(){
				// 获取本人id
				let id = 1
				return this.item.user_id === id
			},
			// 显示的时间
			showTime(){
				return $T.getChatTime(this.item.create_time,this.pretime);
			}
		}
	}
</script>

<style>
	.chat-left-icon {
		left: 80rpx;top: 20rpx;
		
	}
	.chat-right-icon{
		right: 80rpx;
		top: 20rpx;
	}
</style>
