//欢迎页面组件
const SystemMgrIndex = resolve => require(['@/app/components/systemMgr/Index.vue'], resolve);
//编辑器模板管理
const EditorTemplateMgrComponent = resolve => require(['@/app/components/systemMgr/EditorTemplateMgr.vue'], resolve);
//将模块导出去
let SystemMgrRouter = {
    path: '/systemMgr',
    component: SystemMgrIndex,
    children: [
        {
            path: 'editorTemplateMgr',
            component: EditorTemplateMgrComponent
        }
    ]
};


export{
    SystemMgrRouter
};