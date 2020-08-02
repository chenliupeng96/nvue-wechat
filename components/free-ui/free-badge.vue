<template>
	<text class="free-badge bg-danger text-white rounded-circle font-sm"
	:class="badgeClass"
	:style="badgeStyle">{{badgeContext}}</text>
</template>

<script>
	export default {
		props:{
			badgeContext:{
				type:[String,Number],
				default:""
			},
			badgeClass:{
				type:String,
				default:""
			},
			badgeStyle:{
				type:String,
				default:""
			}
		}
	}
</script>

<style scoped>
	.free-badge{
		padding-left: 14rpx;
		padding-right: 14rpx;
		padding-top: 6rpx;
		padding-bottom: 6rpx;
	}
</style>
