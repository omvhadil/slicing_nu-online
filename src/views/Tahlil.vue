<script setup>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const router = useRouter()
const data = reactive({
  mode: 'tahlil'
})
</script>
<template>
  <!-- Header -->
  <nav class="navbar position-sticky top-0" style="background-color: rgb(81, 154, 238)">
    <div class="container">
      <div @click="router.back()">
        <i class="ri-arrow-left-line fs-3 text-white"></i>
      </div>
      <div
        class="d-flex border rounded w-75"
        style="background-color: rgb(228, 239, 248); padding: 0.2rem"
      >
        <button
          @click="data.mode = 'tahlil'"
          class="btn p-1 w-100 font-small"
          :class="data.mode == 'tahlil' ? 'bg-light' : ''"
        >
          Tahlil
        </button>
        <button
          @click="data.mode = 'yasin'"
          class="btn p-1 w-100 font-small"
          :class="data.mode == 'yasin' ? 'bg-light' : ''"
        >
          Yasin
        </button>
      </div>
      <div class="text-white fs-3">
        <i class="ri-font-size"></i>
      </div>
    </div>
  </nav>
</template>
