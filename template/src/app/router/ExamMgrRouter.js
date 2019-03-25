const ExamMgrComponent = resolve => require(['@/app/components/examMgr/exam/ExamMgr.vue'], resolve);
const PagesList = resolve => require(['@/app/components/examMgr/exam/PagesList.vue'], resolve);
const PagesConfig = resolve => require(['@/app/components/examMgr/exam/PagesConfig.vue'], resolve);
const PageView = resolve => require(['@/app/components/examMgr/exam/PageView.vue'], resolve);
const EQsLibrary = resolve => require(['@/app/components/examMgr/exam/EQsLibrary.vue'], resolve);
const StartExam = resolve => require(['@/app/components/examMgr/exam/StartExam.vue'], resolve);
const ExamConfig = resolve => require(['@/app/components/examMgr/exam/ExamConfig.vue'], resolve);
const ExamView = resolve => require(['@/app/components/examMgr/exam/ExamView.vue'], resolve);

const ScoreMgr = resolve => require(['@/app/components/examMgr/score/ScoreMgr'], resolve);
const ScoreExamList = resolve => require(['@/app/components/examMgr/score/ExamList'], resolve);
const ScoreDetail = resolve => require(['@/app/components/examMgr/score/ScoreDetail'], resolve);
var ExamMgrRouter = {
    path: '/examMgr'
    , component: ExamMgrComponent
    , children: [
        {
            path: 'exam/startExam/:showSelector?'
            , component: StartExam
        }
        ,{
            path: 'exam/examConfig/:id/:pageId?'
            ,component:ExamConfig
        }
        ,{
            path: 'exam/examView/:type/:id?'
            ,component:ExamView
        }
        , {
            path: 'exam/eqsLibrary'
            , component: EQsLibrary
        }
        , {
            path: 'exam/pagelist'
            , component: PagesList
        }
        , {
            path: 'exam/pagesConfig/:id?'
            , component: PagesConfig
        }
        , {
            path: 'exam/pagelist/pageView/:type/:id?'
            , component: PageView
        }
    ]
};
var ScoreMgrRouter = {
    path: '/ScoreMgr'
    , component: ScoreMgr
    , children: [
        {
            path: 'list'
            , component: ScoreExamList
            , meta: { menuId: 'scoreMgr_list', isValidate: true }
        }
        ,{
            
            path: 'detail/:examId/:dept?'
            , component: ScoreDetail
            , meta: { menuId: 'scoreMgr_detail', isValidate: true }
        }
    ]
}

export{
    ExamMgrRouter,
    ScoreMgrRouter
};