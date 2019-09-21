<template>
	<div>
    <div class="movie">
        <div class="left_image"><img src="/images/movie.jpg" alt=""></div>
        <div class="right_content">哪吒之魔童降世是由饺子导演,吕艳婷,囧森瑟夫,瀚墨等主演的动画电影。电影简介:本片讲述了元始天尊敕令太乙将灵珠托生为李靖之子,谁知中途遭申公豹从中作梗,殷...</div>
    </div>
    <div class="movie">
        <div class="left_image"><img src="/images/movie.jpg" alt=""></div>
        <div class="right_content">哪吒之魔童降世是由饺子导演,吕艳婷,囧森瑟夫,瀚墨等主演的动画电影。电影简介:本片讲述了元始天尊敕令太乙将灵珠托生为李靖之子,谁知中途遭申公豹从中作梗,殷...</div>
    </div>
    <div class="movie">
        <div class="left_image"><img src="/images/movie.jpg" alt=""></div>
        <div class="right_content">哪吒之魔童降世是由饺子导演,吕艳婷,囧森瑟夫,瀚墨等主演的动画电影。电影简介:本片讲述了元始天尊敕令太乙将灵珠托生为李靖之子,谁知中途遭申公豹从中作梗,殷...</div>
    </div>
</div>
</template>

<script>
export default {
	name:'ComingSoon'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*电影列表start*/
#main .movie{
  border-bottom: 1px solid #666;
  display: flex;
}

#main .movie .left_image{
  width: 25%;
  display: block;
  height: 320px;
  overflow: hidden;
}
#main .movie .left_image img{
  width: 100%;
  height: auto;
}
#main .movie .right_content{
  width: 75%;
  display: block;
  height: 320px;
  overflow: hidden;
  font-size: 30px;
  line-height: 50px;
  word-wrap: break-word;
  text-indent: 2em;
}
/*电影列表end*/
</style>
