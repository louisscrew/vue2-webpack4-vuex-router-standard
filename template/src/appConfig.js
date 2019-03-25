(function (root, factory) {
    var temp = root;
    if(typeof exports === 'object' && typeof module !== 'undefined'){
        module.exports = factory();
    }else if(typeof define === 'function' && define.amd){
        define(factory);
    }else{
        root.allMgrConfig = factory(temp);
        root.document.title = window.allMgrConfig.AppName;
    }
}(this, function (temp) {
    //加载配置文件
    var allMgrConfig = {
        apiServer:{
            co:{
                protocol:"http",
                host:"59.44.43.198",
                post:"80",
                path:"/snap-main-new"
            },
            fileEngine:{
                protocol:"http",
                host:"59.44.43.198",
                post:"80",
                path:"/snap-engine-file"
            },
            examMgr:{
                protocol:"http",
                host:"59.44.43.198",
                post:"80",
                path:"/snap-app-exam"
            },
            infos:{
                protocol:"http",
                host:"59.44.43.198",
                post:"80",
                path:"/snap-app-microinfo"
            }
        },
        devUserId:"user1",
        isLoginVerifyCode:true,
        routeModel: 'hash',
        AppName: "vue demo",
        projectPath: '/',
        uploadImageExt: ["gif", "jpg", "jpeg", "bmp", "png"], //允许上传的图片格式
        uploadVideoExt: ["MP4", "WebM", "Ogg"],
        uploadTemplateExt: ["zip"],
        uploadDocumentExt: ["doc", "docx", "ppt", "pptx", "xls", "xlsx", "pdf",
            "rar", "zip", "7z", "tar.gz", "war", "jar", "txt", "chm",
            "pdr", "azw", "prc", "mbp", "tan", "tpz", "epub", "mobi", "rp"
        ],
        uploadImageMaxSize: 104857600, //100M
        uploadTemplateMaxSize: 20971520, //20M
        coverImageMaxSize: 104857600, //100M
        uploadVideoMaxSize: 536870912,
        uploadDocumentMaxSize: 536870912, //附件最大限制
        carouseMaxNum: 6, //最大轮播数量
        embeddedMode: false //是否为嵌入模式
    };
    return allMgrConfig;
}));
