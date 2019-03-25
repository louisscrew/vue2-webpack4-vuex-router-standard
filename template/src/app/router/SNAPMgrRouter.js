
const indexComponents = resolve => require(['@/app/components/Index.vue'], resolve);
const publicAccountsMgrArticles = resolve => require(['@/app/components/publicAccountsMgr/articles.vue'], resolve);
const publicAccountsMgrCreateArticle = resolve => require(['@/app/components/publicAccountsMgr/article.vue'], resolve);
const publicAccountsMgrPublishBoxer = resolve => require(['@/app/components/publicAccountsMgr/publishBoxer.vue'], resolve);
const publicAccountsMgrAccount = resolve => require(['@/app/components/publicAccountsMgr/accounts.vue'], resolve);
const publicAccountsMgrAnalysis = resolve => require(['@/app/components/publicAccountsMgr/accountsAnalysis.vue'], resolve);
const publicAccountsMgrAnalysis1 = resolve => require(['@/app/components/publicAccountsMgr/accountsAnalysis1.vue'], resolve);

var SNAPMgrRouter = {
    path: '/snapMgr'
    , component: indexComponents
    , children: [
        {
            path: 'publicAccountsMgr/articles/:publicAccountsId?' // /snapMgr/publicAccountsMgr/articles
            , component: publicAccountsMgrArticles
            , props: true
        },
        {
            path: 'publicAccountsMgr/article/:publicAccountsId/:articleId?' // /snapMgr/publicAccountsMgr/createArticle/123/123
            , component: publicAccountsMgrCreateArticle
            , props: true
        },
        {
            name:"snap-publishBoxer"
            , path: 'publicAccountsMgr/publishBoxer/:publicAccountsId?' // /snapMgr/publicAccountsMgr/publishBoxer/123
            , component: publicAccountsMgrPublishBoxer
            , props: true
        }
        ,{
            path: 'publicAccountsMgr/acoounts'
            , component: publicAccountsMgrAccount
        }
        ,{
            path: 'publicAccountsMgr/accountsAnalysis'
            , component: publicAccountsMgrAnalysis
        }
        ,{
            path: 'publicAccountsMgr/accountsAnalysis1'
            , component: publicAccountsMgrAnalysis1
        }
    ]
};

export{
    SNAPMgrRouter
};