<template>
	<view class="content">
		<view class="pic" style="background: url(/static/style.jpg);background-size: cover;">
			<view class="flex_center tag_holder">
				<text style="color: brown;font-size: 45rpx">风格迁移</text>
			</view>
		</view>
		<view class="button_holder">
			<view class="button" @tap="chooseContentImage">{{tempFilePaths.length>=1?"已选择":"选择内容图片"}}</view>
			<view class="button" @tap="chooseStyleImage">{{tempFilePaths.length==2?"已选择":"选择目标风格图片"}}</view>
		</view>

	</view>
</template>

<script>
	// 以下路径需根据项目实际情况填写
	import {
		base64ToPath
	} from '/js_sdk/mmmm-image-tools/index.js'
	import {
		styleTransferUrl as url
	} from '/config.js'
	export default {
		data() {
			return {
				tempFilePaths: [],
				res_image_base64: {}
			}
		},
		methods: {
			chooseContentImage: function() {
				var self = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						var newarr = self.tempFilePaths.concat(res.tempFilePaths)
						self.tempFilePaths = newarr

						// self.tempFilePaths = res.tempFilePaths
						// self.uploadImage(res.tempFilePaths)
					}
				});
			},
			chooseStyleImage: function() {
				var self = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						var newarr = self.tempFilePaths.concat(res.tempFilePaths)
						self.tempFilePaths = newarr
						console.log('test')
						if (self.tempFilePaths.length == 2) {
							self.uploadImage(self.tempFilePaths)
						}
					}
				});
			},
			uploadImage: function(tempFilePaths) {
				var self = this
				uni.showLoading({
					title: "处理中，请耐心等待"
				})
				var files = []
				tempFilePaths.forEach((item,index) => {
					var obj = {}
					obj.uri = item
					obj.name = 'file'+index
					files.push(obj)
				})
				console.log(files)
				uni.uploadFile({
					url: url,
					files: files,
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
									indicator: "none",

								})

								plus.nativeUI.toast(
									"转换成功, 长按保存到相册", {
										duration: 'long'
									});
								self.tempFilePaths = newarr
							})
							.catch(error => {
								console.error(error)
							})
					},
					error:(res)=>{
						uni.showToast({
							title:"网络请求错误"
						})
					}
				});
			}
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
	.button_holder{
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		width: 80%;
		height: 20%;
		position: relative;
		top:-8vh
	}
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgb(164, 126, 121);
		width: 80%;
		height: 40%;
		border-radius: 100rpx;
		font-size: 40rpx;
		color: white;
	}
</style>