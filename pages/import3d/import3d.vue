<template>
	<view class="content">
		<view class="pic" style="background: url(/static/3d.gif);background-size: cover;">
			<view class="flex_center tag_holder">
				<text style="color: brown;font-size: 45rpx">3D视效</text>
			</view>
		</view>
		<view class="button">＋ 导入</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad(e) {
			if (e.hasOwnProperty('url')) {
				this.pass = true
				this.tempFilePaths.push(e.url)
			}
		},
		onReady(e) {
		
			if (this.pass) {
				this.uploadImage(this.tempFilePaths)
			}
		
		},
		methods: {

		}
	}
</script>

<style>
	page{
		height: 100vh;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		height: 100%;
	}

/* 	.content::before {
		content: '';
		background-image: url(/static/backgroud.jpg);
		background-size: cover;
		filter: blur(20px);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	} */

	.pic {
		width: 80%;
		height: 80vw;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 30rpx;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
	}

	.tag_holder {
		background: white;
		opacity: 0.6;
		border-radius: 60rpx;
		width: 300rpx;
		height: 100rpx;
		position: relative;
		top: 50rpx;
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgb(164, 126, 121);
		width: 80%;
		height: 20%;
		border-radius: 100rpx;
		font-size: 80rpx;
		color: white;
	}
</style>