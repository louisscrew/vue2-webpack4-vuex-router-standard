//引用资讯整体的组件
const InformationComponent = resolve => require(['@/app/components/infosMgr/Index.vue'], resolve);
//分类管理的内容
const TypeMgrComponent = resolve => require(['@/app/components/infosMgr/TypeMgr.vue'], resolve);
// //社区审核管理的内容
// const AuditMgrComponent = resolve => require(['@/app/components/infosMgr/AuditMgr.vue'], resolve);
// //资讯审核管理的内容
// const InfoAuditMgrComponent = resolve => require(['@/app/components/infosMgr/InfoAuditMgr.vue'], resolve);
// //专题管理的内容
const SpecialTopicMgrComponent = resolve => require(['@/app/components/infosMgr/SpecialTopicMgr.vue'], resolve);
//文章发布的内容
const ArticlePublishComponent = resolve => require(['@/app/components/infosMgr/ArticlePublish.vue'], resolve);
//资讯管理的内容
const InfoMgrComponent = resolve => require(['@/app/components/infosMgr/InfoMgr.vue'], resolve);
//图集发布
const PicPublishComponent = resolve => require(['@/app/components/infosMgr/PicPublish.vue'], resolve);
//视频发布
const VideoPublishComponent = resolve => require(['@/app/components/infosMgr/VideoPublish.vue'], resolve);
//轮播图管理组件
const CarouseMgrComponent = resolve => require(['@/app/components/infosMgr/CarouseMgr.vue'], resolve);
//轮播编辑组件
const CarouseEditComponent = resolve => require(['@/app/components/infosMgr/CarouseEdit.vue'], resolve);
//资讯配置
const ArticleConfigComponent = resolve => require(['@/app/components/infosMgr/ArticleConfig.vue'], resolve); 
// //平台发布历史组件
// const HistoryComponent = resolve => require(['@/app/component/platform/history.vue'], resolve);

// //推送管理组件
// const PushMgrComponent = resolve => require(['@/app/components/infosMgr/PushMgr.vue'], resolve);


//将模块导出去
let InformationRouter = {
    path: '/information',
    component: InformationComponent,
    children: [
        {
            path: 'articlePublish/:id?',
            component: ArticlePublishComponent,
            props: true
        },
        {
            path: 'picPublish/:id?',
            component: PicPublishComponent,
            props: true
        },
        {
            path: 'videoPublish/:id?',
            component: VideoPublishComponent,
            props: true
        },
        {
            path: 'carouseMgr',
            component: CarouseMgrComponent
        },
    //     {
    //         path: 'pushMgr',
    //         component: PushMgrComponent
    //     },
        {
            path: 'carouse/:id?/:type?',
            component: CarouseEditComponent
        },
    //     {
    //         path: 'auditMgr',
    //         component: AuditMgrComponent
    //     },
        // {
        //     path: 'infoAuditMgr',
        //     component: InfoAuditMgrComponent
        // },
        {
            path: 'typeMgr',
            component: TypeMgrComponent
        },
        {
            path: 'specialTopicMgr',
            component: SpecialTopicMgrComponent
        },
        {
            path: 'infoMgr/:type',
            component: InfoMgrComponent
        },
        {
            path: 'articleConfig',
            component: ArticleConfigComponent
        },
    //     {
    //         path: 'infoMgrList/:type',
    //         component: InfoMgrComponent
    //     },
    //     {
    //         path: 'platformhistory', //平台发布历史
    //         component: HistoryComponent
    //     }

    ]
};


export {
    InformationRouter
};