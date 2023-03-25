<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { wiridDoa } from '../constans'

const wirid = wiridDoa.find((item) => item.title == 'wirid')
const doa = wiridDoa.find((item) => item.title == 'doa')

const router = useRouter()

const data = reactive({
  mode: 'wirid'
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
          @click="data.mode = 'wirid'"
          class="btn p-1 w-100 font-small"
          :class="data.mode == 'wirid' ? 'bg-light' : ''"
        >
          Wirid
        </button>
        <button
          @click="data.mode = 'doa'"
          class="btn p-1 w-100 font-small"
          :class="data.mode == 'doa' ? 'bg-light' : ''"
        >
          Doa
        </button>
      </div>
      <div class="text-white fs-3">
        <i class="ri-bookmark-line"></i>
      </div>
    </div>
  </nav>
  <!-- Content -->
  <main class="container bg-white pt-4">
    <form action="" class="mb-4">
      <div class="d-flex align-items-center border p-2 rounded bg-secondary-subtle">
        <i class="ri-search-line me-3"></i>
        <input type="email" class="border-0 bg-secondary-subtle" placeholder="Cari Wirid/Doa" />
      </div>
    </form>
    <!-- Wirid -->
    <div v-if="data.mode == 'wirid'" class="pb-4">
      <div
        v-for="(item, index) in wirid.category"
        :key="item.id"
        class="d-flex rounded overflow-hidden mt-3 shadow-sm border"
        style="height: 60px"
        @click="router.push('/wirid_doa/' + item.slug)"
      >
        <div
          class="d-flex bg-primary-subtle align-items-center justify-content-center"
          style="width: 50px"
        >
          <h6 class="m-0">{{ index + 1 }}</h6>
        </div>
        <div class="d-flex align-items-center ms-3">
          <div class="">
            <h6 class="m-0 text-small">{{ item.title }}</h6>
            <span class="m-0 text-smaller">{{ item.jml }} Bacaan</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Doa -->
    <div v-if="data.mode == 'doa'" class="pb-4">
      <div
        v-for="(item, index) in doa.category"
        :key="item.id"
        class="d-flex rounded overflow-hidden mt-3 shadow-sm border"
        style="height: 60px"
        @click="router.push('/wirid_doa/' + item.slug)"
      >
        <div
          class="d-flex bg-primary-subtle align-items-center justify-content-center"
          style="width: 50px"
        >
          <h6 class="m-0">{{ index + 1 }}</h6>
        </div>
        <div class="d-flex align-items-center ms-3">
          <div class="">
            <h6 class="m-0 text-small">{{ item.title }}</h6>
            <span class="m-0 text-smaller">{{ item.jml }} Bacaan</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
