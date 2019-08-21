(function (root, factory) {
    var temp = root;
    if(typeof exports === 'object' && typeof module !== 'undefined'){
        module.exports = factory();
    }else if(typeof define === 'function' && define.amd){
        define(factory);
    }else{
        root.appConfig = factory(temp);
        root.document.title = window.appConfig.AppName;
    }
}(this, function (temp) {
    //加载配置文件
    var appConfig = {
        AppName:"vue2 单页面标准工程",
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
                // path:"/snap-engine-file-t"
            }
        }
        
    };
    return appConfig;
}));
