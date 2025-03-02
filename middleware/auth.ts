export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useStrapiUser()
    
    if (user.value && to.path === '/login') {
      return navigateTo('/')
    }

    if (!user.value) {
      useCookie('redirect', { path: '/book' }).value = to.fullPath
      return navigateTo('/login')
    }

    if (!user.value) {
      useCookie('redirect', { path: '/schedule' }).value = to.fullPath
      return navigateTo('/login')
    }
  })