let teacherRouter = {
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
        name:'importDevice',
        component: () => import("../views/teacher/importDevice")
      },
      {
        path: 'configuration',
        name:'configuration',
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
                component:()=>import("../views/teacher/device/camera/navBar"),
                meta: {title:'摄像头'}
              },
              {
                path: 'fictitious',
                name: 'fictitious',
                component: ()=>import("../views/teacher/device/fictitious/index"),
                meta: {title:'虚拟设备'}
              }
            ]
          }
        ]
  
      },
    ]
  }
  export default teacherRouter