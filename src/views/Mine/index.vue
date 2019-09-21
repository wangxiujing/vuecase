<template>
    <div id="app">
        <Header title="我的"/>
    	<TabBar />
    </div>
</template>

<script>
	import Header from '@/components/Header';
	import TabBar from '@/components/TabBar';
    export default {
    	name:'Mine',
    	components:{
    		Header,
    		TabBar
    	}
    }
</script>
