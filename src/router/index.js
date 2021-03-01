import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('@/views/Registration.vue')
  },

  {
    path: '/my_account',
    name: 'MyAccount',
    component: () => import('@/views/MyAccount.vue')
  },
  {
    path: '/my_graphs',
    name: 'MyGraphs',
    component: () => import('@/views/MyGraphs.vue')
  },

  {
    path: '/contact_us',
    name: 'ContactUs',
    component: () => import('@/views/ContactUs.vue')
  },
  {
    path:'/upload_data',
    name: 'UploadData',
    component: () => import('@/views/uploadData.vue')
  },
  {
    path:'/data',
    name: 'GraphData',
    component: () => import('@/views/Data.vue')
  },
  {
    path:'/data_by_tags',
    name: 'DataByTags',
    component: () => import('@/views/DataByTags.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
