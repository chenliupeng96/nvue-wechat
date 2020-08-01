<template>
	<image :src="src" :class="type" mode="widthFix" :style="getStyle"></image>
</template>

<script>
	export default {
		props:{
			size:{
				type:[String,Boolean],
				default:""
			},
			src:{
				type:String,
				default:""
			},
			type:{
				type:String,
				default:"rounded"
			}
		},
		computed:{
			getStyle(){
				return `width: ${this.size}rpx;height: ${this.size}rpx;`
			}
		}
	}
</script>

<style>
</style>
