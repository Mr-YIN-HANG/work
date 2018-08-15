import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine.vue';
import Test1 from './views/Test1.vue';
import Test2 from './views/Test2.vue';
import Error from './views/Error.vue';
import Movie from './views/Movie.vue';
import MovieDetail from './views/MovieDetail.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        alias:'/adc'
    },
    {
        path: '/mine',
        component: Mine,
        children:[
            {
              path:'test1',
              name:'test1',
              component:Test1
            },
            {
              path:'test2/:xx/:age',
              component:Test2
            },
            {
                path:'test3',
                redirect:'test2'

            },
            {
                path:'test3/:xx/:age',
                redirect:'test2/:xx/:age'
            },
            {
                path:'*',
                component:Error
            },
            {
                path:'/movie',
                component:Movie
            },
            {
                path:'/movieDetail/:movieId',
                component:MovieDetail
            }



        ]
    },
  ],
});
