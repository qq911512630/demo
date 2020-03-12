<template>
	<view class="content">
	</view>
</template>

<script>

export default {
	onLoad() {
		this.$Router.push({name:'router1'})
		console.log(this.$Router)
	}
}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
		margin-top: 200upx;
	}
</style> 
