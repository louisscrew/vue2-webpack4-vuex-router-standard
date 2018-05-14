module.exports = {
    plugins: [
        //自动添加索引
        require('autoprefixer')({
            browsers: ['last 2 versions', 'ie >= 9', '> 5% in CN']
        }),
        //压缩样式
        require('cssnano')({
            // 关闭cssnano的autoprefixer选项，不然会和前面的autoprefixer冲突
            autoprefixer: false,
            reduceIdents: false,
            zindex: false,
            discardUnused: false,
            mergeIdents: false
        })
    ]
};