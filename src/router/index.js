import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SanPhamView from '../views/SanPhamView.vue'
import CauChuyenView from '../views/CauChuyenView.vue'
import MediaView from '../views/MediaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/san-pham',
    name: 'san-pham',
    component: SanPhamView,
  },
  {
    path: '/cau-chuyen-thuong-hieu',
    name: 'cau-chuyen',
    component: CauChuyenView,
  },
  {
    path: '/media-assets',
    name: 'media',
    component: MediaView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

export default router
