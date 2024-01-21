import { createRouter, createWebHistory, type Router } from 'vue-router'
import HomeView from '@/components/HomeView.vue'
import DetailView from '@/components/DetailView.vue'
import LogInView from '@/components/LogInView.vue'
import RegisterView from '@/components/RegisterView.vue'
import PasswordResetView from '@/components/PasswordResetView.vue'
import ProfileView from '@/components/ProfileView.vue'
import NotFound from '@/components/NotFound.vue'
import PasswordCheckView from '@/components/PasswordCheckView.vue'

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LogInView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/password-reset',
      name: 'password-reset',
      component: PasswordResetView
    },
    {
      path: '/password-reset-check/:token',
      name: 'password-reset-check',
      component: PasswordCheckView,
      props: true
    },
    {
      path: '/profile/:profile',
      name: 'profile',
      component: ProfileView,
      props: true
    },
    {
      path: '/gallery/:id/:imageName',
      name: 'gallery',
      component: DetailView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: NotFound
    }
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
