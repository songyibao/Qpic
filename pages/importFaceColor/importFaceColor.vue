<template>
	<view class="content">
		<view class="pic" style="background: url(/static/color.jpg);background-size: cover;">
			<view class="flex_center tag_holder">
				<text style="color: brown;font-size: 45rpx">智能上色</text>
			</view>
		</view>
		<view class="button" @tap="chooseImage">＋ 导入</view>
	</view>
</template>

<script>
	// 以下路径需根据项目实际情况填写
	import {
		base64ToPath
	} from '../../js_sdk/mmmm-image-tools/index.js'
	import {
		faceColorUrl as url
	} from '../../config.js'
	export default {
		data() {
			return {
				pass: false,
				tempFilePaths: [],
				res_image_base64: {}
			}
		},
		onLoad(e) {
			console.log(e)
			if (e.hasOwnProperty('url')) {
				this.pass = true
				this.tempFilePaths.push(e.url)
			}

		},
		onReady(e) {
			
			if (this.pass) {
				console.log("开始上传")
				this.uploadImage(this.tempFilePaths)
			}

		},
		methods: {
			chooseImage: function() {
				var self = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						console.log(res.tempFilePaths[0])
						// self.tempFilePaths = res.tempFilePaths
						console.log("文件url列表", res.tempFilePaths)
						self.uploadImage(res.tempFilePaths)
					}
				});
			},
			uploadImage: function(tempFilePaths) {
				var self = this
				uni.showLoading({
					title: "图片上传中"
				})

				uni.uploadFile({
					url: url,
					filePath: tempFilePaths[0],
					name: 'file',
					success: (uploadFileRes) => {
						// console.log(uploadFileRes.data.image)
						var res = JSON.parse(uploadFileRes.data)
						self.res_image_base64 = res.data
						uni.showLoading({
							title: '预览加载中'
						});
						base64ToPath(self.res_image_base64)
							.then(path => {
								uni.hideLoading()
								console.log(path)
								var urls = []
								urls.push(path)
								uni.previewImage({
									urls: urls,
									indicator: "none"

								})

								plus.nativeUI.toast(
									"转换成功, 长按保存到相册", {
										duration: 'long'
									});
							})
							.catch(error => {
								console.error(error)
							})
					}
				});
			}
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
		opacity: 0.75;
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