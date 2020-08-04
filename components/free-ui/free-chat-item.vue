<template>
	<div @longpress="long">
		<!-- 时间显示 -->
		<view v-if="showTime" class="flex align-center justify-center pb-4 pt-2">
			<text class="font-sm text-light-muted">{{showTime}}</text>
		</view>
		<!-- 撤回消息 -->
		<view v-if="item.isremove"  class="flex align-center justify-center pb-4 pt-1 " ref="isremove">
			<text class="font-sm text-light-muted">你撤回了一条信息</text>
		</view>
		<!-- 聊天气泡 -->
		<view v-if="!item.isremove" class="flex align-start position-relative mb-3" :class="!isself?'justify-start':'justify-end'">
			
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
				<free-avatar size="70" :src="item.avatar"></free-avatar>
			</template>
		</view>
	</div>
</template>

<script>
	import freeAvatar from '@/components/free-ui/free-avatar.vue'
	import $T from '@/common/free-lib/time.js'
	// #ifdef APP-PLUS-NVUE
	const animation = weex.requireModule('animation');
	// #endif
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
		},
		mounted() {
			// #ifdef APP-PLUS-NVUE
			this.$watch(this.item.isremove, (newValue,oldValue)=>{
				if(newValue){
					
					this.$nextTick(()=>{
						animation.transition(this.$refs.isremove, {
						    styles: {
								opacity:1
						    },
						    duration: 100, //ms
						    timingFunction: 'ease',
						    }, ()=>{
						        
						    })
					})
					
				}
			})
			// #endif
		},
		methods:{
			// 判断是否是数组并且有值
			isArrayOrValuable(value) {
				return Array.isArray(value) && value.length > 0
			},
			long(e) {
				let x = 0;
				let y = 0;
				let {
					changedTouches
				} = e;
				console.log(changedTouches);
				if (this.isArrayOrValuable(changedTouches)) {
			
					// #ifdef MP-WEIXIN
					x = changedTouches[0].clientX;
					y = changedTouches[0].clientY;
					// #endif
					// #ifdef APP-PLUS-NVUE
					x = changedTouches[0].screenX;
					y = changedTouches[0].screenY;
					// #endif
				}
				this.$emit('long', {
					x,
					y,
					index: this.index
				}, )
			},
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
	.chat-animate{
		/* #ifdef APP-PLUS-NVUE */
		opacity: 0;
		/* #endif */
		
	}
</style>
