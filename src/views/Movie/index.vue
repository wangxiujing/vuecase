<template>
	<div id="app">
        <Header title="电影列表"/>
            <div id="main">
                <!-- 二级导航 -->
                <div id="second_nav">
                    <ul>
                        <!-- 注意链接写对 -->
                        <router-link tag='li' to='/movie/city'>选择城市</router-link>
                        <router-link tag='li' to='/movie/nowPlaying'>正在热映</router-link>
                        <router-link tag='li' to='/movie/comingSoon'>即将上映</router-link>
                        <router-link tag='li' to='/movie/search'>搜索</router-link>
                    </ul>
                </div>
                <keep-alive>
                    <router-view />
                </keep-alive>
            </div>
        <TabBar />
    </div>
</template>



<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import NowPlaying from '@/components/NowPlaying';

    export default {
    	name:'Movie',
    	/*局部组件注入*/
    	components:{
    		Header,
    		TabBar,
            NowPlaying
    	}
    }
</script>


<style scoped>
#second_nav{
    flex: 0 0 auto;
    width: 100%;
    height: 100px;
    background-color:#e8e8e8;
}
#second_nav ul{
    display: flex;
    height: 100%;
}
#second_nav ul li{
    float: left;
    width: calc(100%/4);
    text-align: center;
    list-style: none;
    line-height: 100px;
    font-size: 30px;
}

#second_nav ul li a{
    color:#313131;
}
/*vue自带的router-link-active*/
#second_nav ul li.router-link-active{
    color:#ea4848;
}
</style>