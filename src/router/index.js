import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'MailApp - A VueJS minified mail app' }
    },
    {
      path: '/mail',
      name: 'mail',
      component: () => import('../views/emails/Mail.vue'),
      meta: { title: 'Read Mail - MailApp' }
    },
    {
      props: true,
      path: '/readMail/:id',
      name: 'readMail',
      component: () => import('../views/emails/ReadMail.vue'),
      meta: { title: 'Single Mail - MailApp' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
      meta: { title: 'Page Not Found - MailApp' }
    },
  ]
})

router.beforeEach((to, from) => {
  document.title = to.meta.title ?? 'MailApp'
})

export default router
