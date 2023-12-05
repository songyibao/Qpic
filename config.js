// config.js
const serverUrl = 'http://127.0.0.1:5000'
const superResolutionUrl = serverUrl + '/uploadImg/1';
const pic2dUrl = serverUrl + '/uploadImg/2';
const faceRestoreUrl = serverUrl + '/uploadImg/4';
const faceColorUrl = serverUrl + '/uploadImg/5';
const faceInpaintUrl = serverUrl + '/uploadImg/6';
const styleTransferUrl = serverUrl + '/uploadImg/styleTransfer';
export {
	superResolutionUrl,
	pic2dUrl,
	styleTransferUrl,
	faceRestoreUrl,
	faceColorUrl,
	faceInpaintUrl
};