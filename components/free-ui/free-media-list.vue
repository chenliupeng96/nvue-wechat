<template>
	<view hover-class="bg-light">
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
	import $Time from '@/common/free-lib/time.js'
	export default {
		props: {
			item: Object,
			index: Number
		},
		components: {
			freeAvatar,
			freeBadge
		},
		filters: {
			formatTime(value) {
				return $Time.gettime(value)
			}
		},
		methods: {
			long(e) {
				console.log(e);
			},
			btnClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style>
</style>
