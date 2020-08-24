import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login'),
      meta: {
        title: '登录'
      },
    },
    {
      path: '/home',
      name: 'home',
      redirect:"/datas",
      component: () => import('@/views/Home'),
      meta: {
        title: '首页'
      },
      children:[
        {
          path: '/datas',
          name: 'datas',
          component: () => import('@/views/Datas/Index'),
          meta: {
            title: '统计数据'
          },
        },
        {
          path: '/studentsInfo',
          name: 'studentsInfo',
          component: () => import('@/views/students/Index'),
          meta: {
            title: '学生列表'
          },
        },
        {
          path: '/studentsInfo/detail',
          name: 'detail',
          component: () => import('@/views/students/Detail'),
          meta: {
            title: '学生详情'
          },
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/search/Index'),
      meta: {
        title: '搜索学校'
      },
    },

  ],
  linkActiveClass: 'active'
})


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

export default router;
