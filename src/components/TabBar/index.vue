<template>
	<nav>
        <ul class="footer_nav">
            <router-link tag="li" to="/movie"><a href="">电影</a></router-link>
            <router-link tag="li" to="/cinema"><a href="">影院</a></router-link>
            <router-link tag="li" to="/mine"><a href="">我的</a></router-link>
        </ul>
    </nav>
</template>

<script>
/*给组件加名字，调试的时候方便*/
export default {
  name: 'TabBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
    flex: 0 0 auto;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 120px;
    border-top: 1px solid #666;
    background-color:#e8e8e8;
}
nav ul{
	display: flex;
	height: 100%;
}
nav ul li{
	float: left;
	width: calc(100%/3);
	text-align: center;
	list-style: none;
	line-height: 120px;
	font-size: 45px;
}

nav ul li a{
	color:#313131;
}
/*vue自带的router-link-active*/
nav ul li.router-link-active{
    background-color:#f18c8c;
}
</style>