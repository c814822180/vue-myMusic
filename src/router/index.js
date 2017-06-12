import Vue from 'vue'
import Router from 'vue-router'
import rank from 'components/rank/rank'
import rec from '../components/recommend/rec'
import singer from '../components/singer/singer'
import search from '../components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/rec'
    },
    {
      path:'/rank',
      component:rank
    },
    {
      path:'/rec',
      component:rec
    },
    {
      path:'/singer',
      component:singer
    },
    {
      path:'/search',
      component:search
    }
  ]
})
