import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from '../utils/token'

Vue.use(Router)

// 这个是为了避免一个报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => console.log("路由push跳转错误", err))
}
Router.prototype.replace = function replace (location) {
  return originalPush.call(this, location).catch(err => console.log("路由replace跳转错误", err))
} 

const routes = [{
  path: '/',
  name: '',
  redirect: '/cover',
},
{
  path: '/cover',
  component: () => import('../views/Login/cover'),
  meta: {
    title: '封面',
    requireAuth: false
  }
},
{
  path: "/login/:role",
  name: "Login",
  component: () => import("../views/Login/Login"),
  meta: {
    title: '登录',
    requireAuth: true
  }
},
{
  path: '/teacherPage',
  name: 'teacher',
  component: () => import("../views/teacher/project.vue"),
  meta: { title: '教师项目管理' },
  redirect: '/teacherPage/projectTable',
  children: [
    {
      path: 'projectTable',
      name: 'projectTable',
      component: () => import("../views/teacher/project-browse-table.vue")
    },
    {
      path: 'importDevice',
      name: 'importDevice',
      component: () => import("../views/teacher/importDevice")
    },
    {
      path: 'configuration',
      name: 'configuration',
      component: () => import("../views/teacher/configuration")
    },
    {
      path: 'projectDetails',
      name: 'projectDetails',
      component: () => import("../views/teacher/navigationBar.vue"),
      meta: { title: "导航栏" },
      redirect: '/teacherPage/projectDetails/curProject',
      children: [
        {
          path: 'curProject',
          name: 'curProject',
          component: () => import("../views/teacher/projectItemList.vue"),
          meta: { title: '项目下拉框' },
          redirect: '/teacherPage/projectDetails/curProject/manage',
          children: [
            {
              path: 'manage',
              name: 'manage',
              component: () => import("../views/teacher/mem-management/student-manage.vue"),
              meta: { title: "用户管理" }
            },
            {
              path: 'caijiqi',
              name: 'caijiqi',
              component: () => import("../views/teacher/device/caiji/navBar.vue"),
              meta: { title: "采集设备" },
              redirect: '/teacherPage/projectDetails/curProject/caijiqi/caijiqiItem',
              children: [
                {
                  path: 'caijiqiItem',
                  name: 'caijiqiItem',
                  component: () => import("../views/teacher/device/caiji/caijiItem.vue"),
                  meta: { title: '采集器设备列表' }
                },
                {
                  path: 'decoder',
                  name: 'decoder',
                  component: () => import("../views/teacher/device/caiji/decoder.vue"),
                  meta: { title: '采集器解码器' }
                },
                {
                  path: 'sensor',
                  name: 'sensor',
                  component: () => import("../views/teacher/device/caiji/sensor.vue"),
                  meta: { title: '采集器传感器' }
                }
              ]
            },
            {

              path: 'control',
              name: 'control',
              component: () => import("../views/teacher/device/control/controlNavbar.vue"),
              meta: { title: "控制设备" },
              redirect: '/teacherPage/projectDetails/curProject/control/controlItemTable',
              children: [
                {
                  path: 'controlItemTable',
                  name: 'controlItemTable',
                  component: () => import("../views/teacher/device/control/controlItemTable.vue"),
                  meta: { title: '控制设备列表' }
                },
                {
                  path: 'controlDecoder',
                  name: 'controlDecoder',
                  component: () => import("../views/teacher/device/control/controlDecoder.vue"),
                  meta: { title: '控制设备解码器' }
                },
                {
                  path: 'passageway',
                  name: 'passageway',
                  component: () => import('../views/teacher/device/control/passageway'),
                  meta: { title: '控制设备配置通道' }
                },
              ]
            },
            {
              path: 'becontroled',
              name: 'becontroled',
              component: () => import('../views/teacher/device/becontroled/becontroled.vue'),
              meta: { title: '被控设备' },
            },
            {
              path: 'camera',
              name: 'camera',
              component: () => import("../views/teacher/device/camera/navBar"),
              meta: { title: '摄像头' }
            },
            {
              path: 'fictitious',
              name: 'fictitious',
              component: () => import("../views/teacher/device/fictitious/index"),
              meta: { title: '虚拟设备' }
            }
          ]
        }
      ]

    },
  ]
},
{
  path: '/studentPage',
  name: 'studentPage',
  component: () => import("../views/student/projectTop.vue"),
  redirect: '/studentPage/collector',
  children: [
    {
      path: 'collector',
      name: 'collector',
      component: () => import("../views/student/ordinaryStudent/caijiqi/caijiqi.vue")
    },
    {
      path: 'controll',
      name: 'controll',
      component: () => import("../views/student/ordinaryStudent/controll/controll.vue")
    },
    {
      path: 'beControll',
      name: 'beControll',
      component: () => import("../views/student/ordinaryStudent/beControlled/beControlled.vue")
    },
    {
      path: 'camera',
      name: 'camera',
      component: () => import("../views/student/ordinaryStudent/camera/camera.vue")
    },
    {
      path: 'fictitious',
      name: 'fictitious',
      component: () => import("../views/student/ordinaryStudent/fictitious/fictitious.vue")
    }
  ]
},
{
  path: '/superStudentPage',
  name: 'superStudentPage',
  component: () => import("../views/student/projectTop.vue"),
  redirect:"/superStudentPage/groupMembers",
  children: [
    {
      path:'groupMembers',
      name:'groupMembers',
      component: () => import("../views/student/superStudent/user-management/groupMenber"),
    },
    {
      path:'collector',
      name:'collector',
      component: () => import("../views/student/superStudent/caijiqi/caijiqi"),
    },
    {
      path: 'controll',
      name: 'controll',
      component: () => import("../views/student/superStudent/controll/controll.vue")
    },
    {
      path: 'beControll',
      name: 'beControll',
      component: () => import("../views/student/superStudent/beControlled/beControlled.vue")
    },
    {
      path: 'camera',
      name: 'camera',
      component: () => import("../views/student/superStudent/camera/camera.vue")
    },
    {
      path: 'fictitious',
      name: 'fictitious',
      component: () => import("../views/student/superStudent/fictitious/fictitious.vue")
    }
  ]
}
]
const router = new Router({
  routes
})


// 路由守卫
const whiteList = ['/cover', '/login']
router.beforeEach((to, from, next) => {
  // to 获取到要跳转的路由信息
  // from 跳转之前的路由信息
  // next 放行函数：是否允许进行跳转
  // next写法： next()  next('/login') next(false)中断当前导航
  let token = getToken()
  if (token) {
    // 已经登录
    whiteList.forEach(el => {
      if (to.path.includes(el)) {
        next(false)
      } else {
        // @todo 需要判断用户信息是否存在，如果用户信息不存在则需要重新派发action调用接口，获取用户信息
        // @example
        // let info = store.user.state.info
        // if (info) {
        //   next()
        // }else {
        //   try {
        //     store.dispatch('getUserInfo')
        //     next()
        //   } catch(err){
        // token过期进入catch
        // 清除token
        //     store.dispatcha('logout')
        //     next('/')
        //   }
        // }
        // @params 为进行判断是否有用户信息情况，如果进行了判断则删掉
        next()
      }
    })
  } else {
    // 未登录
    whiteList.forEach(el => {
      if (to.path.includes(el)) {
        next()
      } else {
        next(false)
      }
    })
  }
})
export default router
