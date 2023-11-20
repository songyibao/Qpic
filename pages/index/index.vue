 <template>
 	<view class="content">
 		<!-- <view class="swiper"> -->
 		<image src="/static/swiper1.jpg" class="swiper-item" mode="aspectFill"></image>

 		<!-- </view> -->
 		<view style="height: 4vw;"></view>
 		<view class="holder1">

 			<view class="holder2">
 				<view @tap="switchPage" id="pic1" class="pic"
 					style="background: url(/static/2d.jpg);background-size: cover">


 				</view>
 				<view class="flex_center tag_holder">
 					<text style="color: brown;">卡通形象</text>
 				</view>
 			</view>
 			<view class="holder2">
 				<view @tap="switchPage" id="pic2" class="pic"
 					style="background: url(/static/3d.gif);background-size: cover;">


 				</view>
 				<!-- <video src="/static/3d.mp4" autoplay="true" loop="true"></video> -->
 				<view class="flex_center tag_holder">
 					<text style="color: brown;">3D视效</text>
 				</view>
 			</view>
 		</view>
 		<view class="holder1" style="margin-bottom: 10px;">
 			<view class="holder2">
 				<view @tap="switchPage" id="pic3" class="pic"
 					style="background: url(/static/pic3.png);background-size: cover;background-color: white;  ">


 				</view>
 				<view class="flex_center tag_holder">
 					<text style="color: brown;">图像焕新</text>
 				</view>
 			</view>
 			<view class="holder2">
 				<view @tap="switchPage" id="pic4" class="pic"
 					style="background: url(/static/style.jpg);background-size: cover;">


 				</view>
 				<view class="flex_center tag_holder">
 					<text style="color: brown;">风格迁移</text>
 				</view>
 			</view>
 		</view>
 		<view class="flex_center" style="width: 100%;height: fit-content;" @tap="getImage">
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
 				console.log(e.currentTarget.id)
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
 						break;
 					case "pic4":
 						uni.navigateTo({
 							url: "/pages/importStyle/importStyle"
 						})
 						break;
 					default:
 						break;
 				}
 			},
 			getImage: function(e) {
 				var self = this
 				var cmr = plus.camera.getCamera();
 				cmr.captureImage(function(p) {
 					plus.io.resolveLocalFileSystemURL(p, function(entry) {
 						var imgURL = entry.toLocalURL()

 						uni.showActionSheet({
 							itemList: ['卡通形象', '3D视效', '图像焕新'],
 							success: function(res) {
 								switch (res.tapIndex) {
 									case 0:
 										uni.navigateTo({
 											url: "/pages/import2d/import2d" +
 												"?" + "url=" +
 												imgURL
 										})
 										break;
 									case 1:
 										uni.navigateTo({
 											url: "/pages/import3d/import3d" +
 												"?" + "url=" +
 												imgURL
 										})
 										break;
 									case 2:
 										self.compressImage(imgURL)
 											.then(function(compressedPath) {
												
 												uni.navigateTo({
 													url: "/pages/importSR/importSR?url=" +
 														compressedPath
 												})
 											})
 											.catch(function(errorMessage) {
												console.log('compress error')
 											});

 										break;
 									default:
 										break;
 								}
 							},
 							fail: function(res) {
 								console.log(res.errMsg);
 							}
 						});

 						// compressImage(entry.toLocalURL(), entry.name);
 					}, function(e) {
 						plus.nativeUI.toast("读取拍照文件错误：" + e.message);
 					});
 				}, function(e) {}, {
 					filter: 'image'
 				});
 			},
 			// 压缩图片函数
 			compressImage: function(sourcePath) {
 				return new Promise(function(resolve, reject) {
 					// 压缩后的图片路径
 					var targetPath = plus.io.convertLocalFileSystemURL("_doc/compressed.jpg");

 					// 压缩配置参数
 					var options = {
 						src: sourcePath, // 原始图片路径
 						dst: targetPath, // 压缩后图片路径
 						width: '20%',
 						height: '20%',
 						//quality: 5, // 压缩质量，可调整压缩比例，范围为0-100
 						overwrite: true // 是否覆盖源文件
 					};

 					// 调用压缩方法
 					plus.zip.compressImage(options, function(event) {
 						console.log("压缩后", JSON.stringify(event))
 						// 压缩成功，使用 Promise 的 resolve 返回压缩后的图片路径
 						resolve(event.target);
 					}, function(error) {
 						// 压缩失败，使用 Promise 的 reject 返回错误信息
 						reject(error.message);
 					});
 				});
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
 		height: 30%;
 		/* text-align: center; */
 		/* background-color: antiquewhite; */
 		border-radius: 0rpx 0rpx 30rpx 30rpx;
 		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
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