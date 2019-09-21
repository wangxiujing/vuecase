export default {
    path: '/movie',
    /* 按需加载路由,切换到/movie路由下的时候才会加载这个组件 @代表的是src,后面要加斜杠*/
    component: () => import('@/views/Movie'),
    /*二级路由*/
    children:[
    	{
    		path:'city',
    		component:()=>import('@/components/City')
    	},
    	{
    		path:'comingSoon',
    		component:()=>import('@/components/ComingSoon')
    	},
    	{
    		path:'search',
    		component:()=>import('@/components/Search')
    	},
        {
            path:'nowPlaying',
            component:()=>import('@/components/NowPlaying')
        },
        /*重定向*/
        {
            path:'/movie',
            redirect:'/movie/nowPlaying'
        }
    ]
}