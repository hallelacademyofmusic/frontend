// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Hallel Academy of Music - Inspiring Musical Excellence',
      meta: [
        { 
          name: 'description', 
          content: 'Hallel Academy of Music offers exceptional music education and training. Contact us at 343-307-0153 or info@hallelacademy.com for inspiring musical excellence.' 
        },
        { 
          name: 'keywords', 
          content: 'music academy, music education, music lessons, Hallel Academy, musical excellence' 
        },
        { 
          name: 'author', 
          content: 'Hallel Academy of Music' 
        },
        { 
          property: 'og:title', 
          content: 'Hallel Academy of Music - Inspiring Musical Excellence' 
        },
        { 
          property: 'og:description', 
          content: 'Hallel Academy of Music offers exceptional music education and training. Contact us at 343-307-0153 or info@hallelacademy.com for inspiring musical excellence.' 
        },
        { 
          property: 'og:type', 
          content: 'website' 
        },
        { 
          name: 'twitter:card', 
          content: 'summary' 
        },
        { 
          name: 'twitter:title', 
          content: 'Hallel Academy of Music - Inspiring Musical Excellence' 
        },
        { 
          name: 'twitter:description', 
          content: 'Hallel Academy of Music offers exceptional music education and training. Contact us at 343-307-0153 or info@hallelacademy.com for inspiring musical excellence.' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { 
          rel: 'preconnect', 
          href: 'https://fonts.googleapis.com' 
        },
        { 
          rel: 'preconnect', 
          href: 'https://fonts.gstatic.com',
          crossorigin: '' 
        },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap' 
        }
      ]
    }
  }
})