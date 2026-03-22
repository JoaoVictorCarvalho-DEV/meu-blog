# Blog

Confira os posts mais recentes:

<script setup>
import { data as posts } from './posts.data.js'
</script>

<PostCard
  v-for="post in posts"
  :key="post.url"
  :post="post"
/>