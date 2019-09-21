<template>
    <header>
        <div class="title">{{ title }}</div>
    </header>
</template>

<script>
/*给组件加名字，调试的时候方便*/
export default {
  name: 'Header',
  props: {
    title:{
        type:String,
        default : '电影商城'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background: #f18c8c;
    flex: 0 0 auto;
    height: 100px;
}
header .title{
	font-size: 40px;
	text-align: center;
	line-height: 100px;
}
</style>
