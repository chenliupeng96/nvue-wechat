<template>
	<view :class="item.istop ? 'bg-light' : 'bg-white'" hover-class="bg-light">
		<div class="flex align-stretch" @longpress="long" @click="btnClick">
			<view class="flex align-center justify-center position-relative " style="width: 145rpx;">
				<free-avatar :src="item.avatar" size="92"></free-avatar>
				<free-badge badgeClass="position-absolute" badgeStyle="top:15rpx;right:15rpx;" :badgeContext="item.noreadNum" v-if="item.noreadNum>0"></free-badge>
			</view>
			<view class="flex flex-column border-light-secondary flex-1 py-3 pr-3">
				<view class="flex align-center justify-between mb-1">
					<text class="font-md">{{item.nickname}}</text>
					<text class="font-sm text-light-muted">{{item.update_time|formatTime}}</text>
				</view>
				<text class="font text-ellipsis text-light-muted">{{item.data}}</text>
			</view>
		</div>
	</view>
</template>

<script>
	import freeAvatar from '@/components/free-ui/free-avatar.vue'
	import freeBadge from '@/components/free-ui/free-badge.vue'
	import freeBase from '../../common/mixin/free-base.js'
	export default {
		mixins: [freeBase],
		props: {
			item: Object,
			index: Number
		},
		components: {
			freeAvatar,
			freeBadge
		},
		methods: {
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
			btnClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style>
</style>
