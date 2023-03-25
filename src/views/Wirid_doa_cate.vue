<script setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const slug = useRoute().params.slug
</script>
<template>
  <nav class="navbar position-sticky top-0" style="background-color: rgb(81, 154, 238)">
    <div class="container">
      <div class="d-flex align-items-center">
        <div @click="router.back()">
          <i class="ri-arrow-left-line fs-3 text-white"></i>
        </div>
        <h5 class="m-0 ms-3 text-white">{{ slug }}</h5>
      </div>
    </div>
  </nav>
</template>
