<template>
	<div id="main">
        <div class="city">陕西省</div>
        <div class="city">山西省</div>
        <div class="city">陕西省</div>
        <div class="city">陕西省</div>

    </div>
</template>

<script>
export default {
	name:'City'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*城市start*/
#main .city{
	display: flex;
	border-bottom: 1px solid #666;
	height: 80px;
	line-height: 80px;
	font-size: 35px;
	padding-left: 50px;
}
/*城市end*/

</style>
