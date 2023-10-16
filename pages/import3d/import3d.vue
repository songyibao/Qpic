<template>
	<view class="content">
		<view class="pic" style="background: url(/static/pic2.jpg);background-size: cover;">
			<view class="flex_center tag_holder">
				<text style="color: brown;">漫转3D</text>
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
		methods: {
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		height: 100%;
	}
	.content::before {
	  content: '';
	  background-image: url(/static/backgroud.jpg); /* 替换成你的背景图片路径 */
	  background-size: cover; /* 根据容器大小调整背景图片尺寸 */
	  filter: blur(20px); /* 调整模糊程度，值可以根据需求调整 */
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  z-index: -1; /* 确保 ::before 在内容之后 */
	}
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
		opacity: 0.75;
		border-radius: 30rpx;
		width: 150rpx;
		height: 50rpx;
		position: relative;
		top: 50rpx;
	}
	.button{
		display: flex;
		justify-content: center;
		align-items: center;
		background:rgb(164, 126, 121);
		width: 80%;
		height: 20%;
		border-radius: 100rpx;
		font-size: 80rpx;
		color: white;
	}
</style>
