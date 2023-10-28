<template>
	<view class="content">
		<view class="swiper">
			<image src="/static/swiper1.jpg" class="swiper-item" mode="aspectFill"></image>

		</view>
		<view style="height: 4vw;"></view>
		<view class="holder1">

			<view class="holder2">
				<view @tap="switchPage" id="pic1" class="pic"
					style="background: url(/static/pic1.jpg);background-size: cover;">


				</view>
				<view class="flex_center tag_holder">
					<text style="color: brown;">漫转2D</text>
				</view>
			</view>
			<view class="holder2">
				<view @tap="switchPage" id="pic2" class="pic"
					style="background: url(/static/pic2.jpg);background-size: cover;">


				</view>
				<view class="flex_center tag_holder">
					<text style="color: brown;">漫转3D</text>
				</view>
			</view>
		</view>
		<view class="holder1" style="margin-bottom: 10px;">
			<view class="holder2">
				<view @tap="switchPage" id="pic3" class="pic"
					style="background: url(/static/pic2.jpg);background-size: cover;">


				</view>
				<view class="flex_center tag_holder">
					<text style="color: brown;">焕新</text>
				</view>
			</view>
			<view class="holder2">
				<view @tap="switchPage" id="pic4" class="pic"
					style="background: url(/static/pic1.jpg);background-size: cover;">


				</view>
				<view class="flex_center tag_holder">
					<text style="color: brown;">焕新</text>
				</view>
			</view>
		</view>
		<view class="flex_center" style="width: 100%;height: fit-content;">
			<!-- <view class="flex_center photo_holder"> -->
			<image src="/static/photo.png" class="photo"></image>
			<!-- </view> -->

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
			switchPage: function(e) {
				switch (e.currentTarget.id) {
					case "pic1":
						uni.navigateTo({
							url: "/pages/import2d/import2d"
						})
						break;
					case "pic2":
						uni.navigateTo({
							url: "/pages/import3d/import3d"
						})
						break;
					case "pic3":
						uni.navigateTo({
							url: "/pages/importSR/importSR"
						})
					default:
						break;
				}
			}
		}
	}
</script>

<style>
	.content {
		/* background-color: #dde8e8; */
		/* padding: 3%; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}

	.content::before {
		content: '';
		background-image: url(/static/backgroud.jpg);
		background-size: cover;
		filter: blur(30px);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.swiper {
		/* margin-top: 3vh; */
		width: 100%;
		height: 30%;
		border-radius: 0rpx 0rpx 30rpx 30rpx;
		overflow: hidden;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
	}

	.swiper-item {
		width: 100%;
		height: 100%;
		text-align: center;
		background-color: antiquewhite;
	}


	.holder1 {
		padding: 0 3vw 0 3vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 25%;
		margin-bottom: 15px;
		box-sizing: border-box;
	}

	.holder2 {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;

		width: fit-content;
		height: 55vw;

	}

	.pic {
		width: 44vw;
		height: 44vw;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 30rpx;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
	}

	.tag_holder {
		background: white;
		opacity: 0.75;
		border-radius: 30rpx;
		width: 150rpx;
		height: 50rpx;
	}

	.photo_holder {
		width: 21vw;
		height: 21vw;
		/* background-color: whitesmoke; */
		border-radius: 50%;
		position: relative;
		top: 3rpx;
		left: 5rpx;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
	}

	.photo {
		/* background-color: grey; */
		/* height: 18vw; */
		width: 21vw;
		height: 21vw;
		/* background-color: black; */
		/* border-radius: 50%; */
		border-radius: 50%;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
	}
</style>