<template>
  <div class="card">
    <h2>{{ post.title }}</h2>
    <p>{{ post.date }}</p>
  </div>
</template>

<script setup>
defineProps(['post'])
</script>