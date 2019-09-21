import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		movieRouter,
		mineRouter,
		cinemaRouter,
		/*重定向，以上都不匹配时，重定向到Movie*/
		{
			path:'/*',
			redirect:'./movie'
		}
  ]
})
