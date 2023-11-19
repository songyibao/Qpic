function compressImg(img) {
	console.log('开始压缩');
	let that = this
	return new Promise((res) => {
		// var localPath = plus.io.convertAbsoluteFileSystem(img);
		plus.io.resolveLocalFileSystemURL(img, (entry) => { //通过URL参数获取目录对象或文件对象
			entry.file((file) => { // 可通过entry对象操作图片 
				console.log('压缩前图片信息:' + JSON.stringify(file)); //压缩前图片信息
				if (file.size > 504800) { //   如果大于500Kb进行压缩
					plus.zip.compressImage({ // 5+ plus.zip.compressImage 了解一下，有详细的示例
						src: img, //src: 压缩原始图片的路径    
						dst: img.replace('.png', '2222.png').replace(
							'.PNG', '2222.PNG').replace('.jpg',
							'2222.jpg').replace('.JPG', '2222.JPG'),
						width: '40%', //dst: (String 类型 )压缩转换目标图片的路径，这里先在后面原始名后面加一个2222区分一下
						height: '40%', //width,height: (String 类型 )缩放图片的宽度,高度
						quality: 10, //quality: (Number 类型 )压缩图片的质量
						overwrite: true, //overwrite: (Boolean 类型 )覆盖生成新文件
						// format:'jpg'   //format: (String 类型 )压缩转换后的图片格式
					}, (event) => {
						console.log('压缩后图片信息:' + JSON.stringify(
							event)); // 压缩后图片信息
						this.imageInfo = event
						let newImg = event.target;
						res(newImg); //返回新的图片地址，在uploadFile之前接收
					}, function(err) {
						// console.log('Resolve file URL failed: ' + err.message);
					});
				} else { //else小于500kb跳过压缩，直接返回现有的src
					res(img);
				}
			});
		}, (e) => { // 返回错误信息
			// console.log('Resolve file URL failed: ' + e.message);
		});
	})
}
module.exports = { 
    compressImg:compressImg
}