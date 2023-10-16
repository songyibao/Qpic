<template>
	<view class="content">
		<swiper class="swiper" circular :autoplay="true">
			<swiper-item>
				<image src="/static/renew_swiper1.jpg" class="swiper-item" mode="aspectFit"></image>
			</swiper-item>

		</swiper>
		<view style="height: 5%;"></view>
		<view class="holder1">
			<view @tap="switchPage" id="pic1" class="pic" style="background: url(/static/pic1.jpg);background-size: cover;">
				<view class="flex_center tag_holder">
					<text style="color: brown;">漫转2D</text>
				</view>

			</view>
			<view @tap="switchPage" id="pic2" class="pic" style="background: url(/static/pic2.jpg);background-size: cover;">
				<view class="flex_center tag_holder">
					<text style="color: brown;">漫转3D</text>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			switchPage:function(e){
				switch(e.currentTarget.id){
					case "pic1":
						uni.navigateTo({
							url:"/pages/import2d/import2d"
						})
						break;
					case "pic2":
						uni.navigateTo({
							url:"/pages/import3d/import3d"
						})
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style>

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
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
	.swiper {
		width: 100%;
		height: 400rpx;
		border-radius: 0 0 30rpx 30rpx;
		overflow: hidden;
	}

	.swiper-item {
		width: 100%;
		/* line-height: 400rpx; */
		height: 100%;
		text-align: center;
		background-color: antiquewhite;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.holder1 {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 25%;

	}

	.pic {
		width: 40%;
		height: 40vw;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 30rpx;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
		box-sizing: border-box;
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
</style>