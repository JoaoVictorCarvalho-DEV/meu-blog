export default {
  title: "Meu Blog",
  description: "Blog com VitePress",

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/posts/' },
      { text: 'Sobre', link: '/about' }
    ],

    sidebar: {
      '/posts/': [
        {
          text: 'Posts',
          items: [
            { text: 'Lista de Posts', link: '/posts/' }
          ]
        }
      ]
    }
  }
}