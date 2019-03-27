/* eslint-disable  */
import imgHandle from './imgHandle';

export default class {
	constructor(uploadBasePath = '', drive = 'cos') {
		this.uploadBasePath = uploadBasePath;
		this.drive = drive;
	}

	/**
     * 设置图片压缩选项
     * @param imgOptions
     */
	imgOptions(imgOptions) {
		this.imgOptions = imgOptions;
		return this;
	}

	/**
     * 设置ajax请求选项
     * @param ajaxOptions
     */
	ajaxOptions(ajaxOptions) {
		this.ajaxOptions = ajaxOptions;
		return this;
	}

	/**
     * 把单个文件转成文件数组
     * @param files
     */
	fileToFiles(files) {
		if (typeof files.length === 'undefined') files = [files];
		return files;
	}

	/**
     * 获取上传进度获取
     * @param callback
     */
	onUploadProgress(callback) {
		if (!this.ajaxOptions) this.ajaxOptions = {};
		this.ajaxOptions.onUploadProgress = callback;
		return this;
	}

	/**
     * 获取上传参数
     * @param drive
     * @return {Promise<*>}
     */
	uploadParameter(drive = null) {
		// if (drive) this.drive = drive;
		// return uploadToken(this.drive);
		throw Error('缺失获取上传参数配置');
	}

	/**
     *
     * @param parameter
     * @return {*}
     */
	handleUploadParameter(parameter) {
		if (parameter.access_url.substr(parameter.access_url.length - 1, 1) !== '/') {
			parameter.access_url += '/';
		}

		if (!this.ajaxOptions) this.ajaxOptions = {};
		if (!(this.ajaxOptions.headers instanceof Object)) this.ajaxOptions.headers = {};
		if (parameter.headers instanceof Object) Object.assign(this.ajaxOptions.headers, parameter.headers);

		return parameter;
	}

	/**
     * 开始批量上传
     * @param files
     * @return {Promise<Array>}
     */
	async uploadStart(files) {
		if (files) files = this.fileToFiles(files);

		const filesUrl = [];
		for (let i = 0; i < files.length; i++) {
			filesUrl.push(await this.uploadFile(files[i]));
		}
		return filesUrl;
	}

	/**
     * 上传单个文件
     * @param file
     * @return {Promise<*>}
     */
	async uploadFile(file) {
		let uploadPath = this.uploadBasePath;
		const uploadParameter = this.handleUploadParameter(await this.uploadParameter());
		const uploadForm = uploadParameter.form;

		if (this.imgOptions) {
			file = await imgHandle(file, this.imgOptions);
		}

		const filename = this.genFileName(file);
		uploadPath += filename;

		const formData = new FormData();
		formData.append('key', uploadPath);
		for (const key in uploadForm) {
			if (!{}.hasOwnProperty.call(uploadForm, key)) continue;
			formData.append(key, uploadForm[key]);
		}
		formData.append('file', file, filename);

		await $nuxt.$axios.post(uploadParameter.upload_url, formData, this.ajaxOptions);

		return uploadParameter.access_url + uploadPath;
	}

	/**
     * 生成文件名
     * @param file
     * @return {string}
     */
	genFileName(file) {
		if (!file.name) {
			return `${(new Date()).getTime()}.jpg`;
		}
		const ext = file.name.split('.').pop();
		return `${(new Date()).getTime()}.${ext}`;
	}
}
