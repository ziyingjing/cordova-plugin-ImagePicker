interface ImageResult {
    /** 本地保存路径，eg:"/data/user/0/com.pushsoft.im2/cache/ImagePicker/152783817455118.jpg" */
    path: string;
    /** 路径，eg:"file:///data/user/0/com.pushsoft.im2/cache/ImagePicker/152783817455118.jpg" */
    uri: string;
    /** 图片宽度，eg:720 */
    width: number;
    /** 图片高度，eg:1280 */
    height: number;
    /** 图片大小，单位字节，eg:104871 */
    size: number;
}

interface ChooseImageOptions {
    /** 多选限制数量，默认为9 */
    maximumImagesCount?: number;
    /** 设置输出图片的width，默认为自动 */
    width?: number;
    /** 设置输出图片的height，默认为自动 */
    height?: number;
    /** 图片质量 默认80 */
    quality?: number;
    /** 允许选择原图 默认true */
    enablePickOriginal?: boolean;
}

interface SuccessCallbackResult {
    images: Array<ImageResult>;
    /** 是否是原图，eg:false */
    isOrigin: boolean;
}

/**
 * This plugin provides an API for taking pictures and for choosing images from the system's image library.
 * 支持平台 Android iOS
 */
 interface CameraImagePicker {
     /**
     * 获取本地相册图片.
     * @param success 选图成功回调, 返回格式如下所示,根据路径显示，展示图片均可.
     * @param error 选图失败回调，返回一个失败提示.
     * @param chooseImageOptions 可选参数设置选图的配置.
     */
    // {
    //     "images": [{
    //         "path": "/data/user/0/com.pushsoft.im2/cache/ImagePicker/152783817455118.jpg",
    //         "uri": "file:///data/user/0/com.pushsoft.im2/cache/ImagePicker/152783817455118.jpg",
    //         "width": 720,
    //         "height": 1280,
    //         "size": 104871 // 文件体积(单位：字节)
    //     }, {
    //         "path": "/data/user/0/com.pushsoft.im2/cache/ImagePicker/152783817464525.jpg",
    //         "uri": "file:///data/user/0/com.pushsoft.im2/cache/ImagePicker/152783817464525.jpg",
    //         "width": 720,
    //         "height": 1280,
    //         "size": 109873
    //     }],
    //     "isOrigin": false // 是否原图
    // }
    getPictures(
        success: (result: SuccessCallbackResult) => void,
        error: (message: string) => void,
        chooseImageOptions?: ChooseImageOptions): void;
   
    /**
     * 获取本地相机拍取图片.
     * @param success 选图成功回调, 返回格式如下所示,根据路径显示，展示图片均可.
     * @param error 选图失败回调，返回一个失败提示.
     * @param chooseImageOptions 可选参数设置选图的配置.
     */
    // {
    //     "images": [{
    //         "path": "/data/user/0/com.pushsoft.im2/cache/ImagePicker/152783817455118.jpg",
    //         "uri": "file:///data/user/0/com.pushsoft.im2/cache/ImagePicker/152783817455118.jpg",
    //         "width": 720,
    //         "height": 1280,
    //         "size": 104871 // 文件体积(单位：字节)
    //     }, {
    //         "path": "/data/user/0/com.pushsoft.im2/cache/ImagePicker/152783817464525.jpg",
    //         "uri": "file:///data/user/0/com.pushsoft.im2/cache/ImagePicker/152783817464525.jpg",
    //         "width": 720,
    //         "height": 1280,
    //         "size": 109873
    //     }],
    //     "isOrigin": false // 是否原图
    // }
    takePhoto(
        success: (result: SuccessCallbackResult) => void,
        error: (message: string) => void,
        chooseImageOptions?: ChooseImageOptions): void;
}

declare var ImagePicker: CameraImagePicker;