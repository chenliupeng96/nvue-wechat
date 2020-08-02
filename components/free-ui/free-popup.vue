<template>
	<div style="z-index:9999;overflow:hidden;" v-if="status">
		<!-- 蒙版 -->
		<div v-if="mask" class="position-fixed top-0 left-0 bottom-0 right-0" :style="getMaskCOlor" @click="hide"></div>
		<!-- 弹出框内容 -->
		<div class="position-fixed bg-white" :class="getBodyClass" :style="getBodyStyle">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			// 是否开启蒙版颜色
			maskColor: {
				type: Boolean,
				default: false
			},
			// 是否开启蒙版
			mask: {
				type: Boolean,
				default: true
			},
			// 是否处于底部
			bottom: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				status: false,
				x: -1,
				y: -1
			}
		},
		computed: {
			getMaskCOlor() {
				let i = this.maskColor ? 0.5 : 0
				return `background-color: rgba(0,0,0,${i});`
			},
			getBodyClass() {
				let bottom = this.bottom ? 'left-0 right-0 bottom-0' : 'rounded border'
				return bottom
			},
			getBodyStyle() {
				let left = this.x > -1 ? `left:${this.x}px;` : "";
				let top = this.y > -1 ? `top:${this.y}px;` : "";
				return `${left}${top}`
			}
		},
		methods: {
			show(x = -1, y = -1) {
				this.x = x;
				this.y = y;
				this.status = true;
			},
			hide() {
				this.status = false
			}
		}
	}
</script>

<style>
</style>
