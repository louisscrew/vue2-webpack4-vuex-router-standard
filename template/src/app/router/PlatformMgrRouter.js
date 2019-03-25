//第三方统计的实例
const PlatformSharingComponent = resolve => require(['@/app/components/platformMgr/Index.vue'], resolve);
// //微信
// const WeixinComponent = resolve => require(['@/app/components/platformMgr/Weixin.vue'], resolve);
// //微博
// const WeiboComponent = resolve => require(['@/app/components/platformMgr/Weibo.vue'], resolve);
// //百度知道
// const ZhidaoComponent = resolve => require(['@/app/components/platformMgr/Zhidao.vue'], resolve);
// //头条
// const ToutiaoComponent = resolve => require(['@/app/components/platformMgr/Toutiao.vue'], resolve);
// //企鹅号
// const QieComponent = resolve => require(['@/app/components/platformMgr/Qie.vue'], resolve);
// //网易号
// const NetEaseComponent = resolve => require(['@/app/components/platformMgr/NetEase.vue'], resolve);
//将模块导出去
let PlatformMgrRouter = {
    path: 'platformSharing'
    , component: PlatformSharingComponent
    // , children: [
    //     {
    //         path: 'weixin',
    //         component: WeixinComponent
    //     },
    //     {
    //         path: 'weibo',
    //         component: WeiboComponent
    //     },
    //     {
    //         path: 'zhidao',
    //         component: ZhidaoComponent
    //     },
    //     {
    //         path: 'qie',
    //         component: QieComponent
    //     },
    //     {
    //         path: 'toutiao',
    //         component: ToutiaoComponent
    //     },
    //     {
    //         path: 'netease',
    //         component: NetEaseComponent
    //     }
    // ]
};
export{
    PlatformMgrRouter
};