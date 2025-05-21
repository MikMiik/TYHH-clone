import config from '@/config'
import { Home, OnlineLearning, VipDocuments, Documents, LiveSchedule, Login, Register } from '@/pages'
import DefaultLayout from '@/Layouts/DefaultLayout'
import Test from '@/pages/test'

const routes = [
  {
    path: config.routes.home,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: config.routes.onlineLearning,
    component: OnlineLearning,
    layout: DefaultLayout,
  },
  {
    path: config.routes.vipDocuments,
    component: VipDocuments,
    layout: DefaultLayout,
  },
  {
    path: config.routes.documents,
    component: Documents,
    layout: DefaultLayout,
  },
  {
    path: config.routes.liveSchedule,
    component: LiveSchedule,
    layout: DefaultLayout,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: DefaultLayout,
  },
  {
    path: config.routes.liveSchedule,
    component: Register,
    layout: DefaultLayout,
  },
  {
    path: config.routes.notFound,
  },
  {
    path: config.routes.test,
    component: Test,
    layout: DefaultLayout,
  },
]

export default routes
