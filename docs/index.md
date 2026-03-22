---
layout: home

hero:
  name: "Meu Blog"
  text: "Desenvolvimento, ideias e projetos"
  tagline: Compartilhando conhecimento sobre Vue, programação e tecnologia
  actions:
    - theme: brand
      text: Ver Posts
      link: /posts/
    - theme: alt
      text: Sobre mim
      link: /about

features:
  - title: 🚀 Desenvolvimento
    details: Conteúdos sobre Vue, JavaScript e boas práticas

  - title: 🧠 Aprendizado
    details: Explicações simples de conceitos complexos

  - title: 🛠 Projetos
    details: Ideias práticas e aplicações reais
---

<script setup>
import { data as posts } from './posts/posts.data.js'
import PostCard from './.vitepress/theme/components/PostCard.vue'
</script>

<PostCard v-for="post in posts.slice(0, 3)" :post="post" />