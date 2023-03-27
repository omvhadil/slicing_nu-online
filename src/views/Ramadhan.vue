<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <nav class="navbar position-fixed w-100 z-3 bg-header">
    <div class="container">
      <div class="d-flex align-items-center">
        <div @click="router.back()">
          <i class="ri-arrow-left-line fs-3 text-white"></i>
        </div>
        <p class="m-0 ms-3 text-white">Ramadhan</p>
      </div>
      <div class="d-flex align-items-center column-gap-4">
        <button class="btn p-0 text-white">
          <i class="ri-share-line fs-3"></i>
        </button>
      </div>
    </div>
  </nav>
  <section class="pt-5 container">
    <span class="text-smaller text-center d-block mt-3"
      ><i class="ri-map-pin-2-fill text-danger me-2"></i>Kota Probolinggo Kec Kraksaan</span
    >
    <div class="d-flex align-items-center justify-content-between">
      <button class="btn"><i class="ri-arrow-left-s-line fs-3 text-info"></i></button>
      <span class="m-0">27 Maret 2023 / 5 Ramadhan 1444</span>
      <button class="btn"><i class="ri-arrow-right-s-line fs-3 text-info"></i></button>
    </div>

    <div class="row px-3">
      <div class="col-4 p-1">
        <div class="border border-info text-center p-2 rounded bg-info-subtle">
          <span class="text-smaller">Imsak</span>
          <h6 class="m-0 text-small">04:31 WIB</h6>
        </div>
      </div>
      <div class="col-4 p-1">
        <div class="border border-info text-center p-2 rounded bg-info-subtle">
          <span class="text-smaller">Subuh</span>
          <h6 class="m-0 text-small">04:31 WIB</h6>
        </div>
      </div>
      <div class="col-4 p-1">
        <div class="border border-info text-center p-2 rounded bg-info-subtle">
          <span class="text-smaller">Maghrib</span>
          <h6 class="m-0 text-small">04:31 WIB</h6>
        </div>
      </div>
    </div>
  </section>
  <section class="container mt-5">
    <form action="">
      <div class="d-flex align-items-center border p-2 rounded bg-secondary-subtle">
        <i class="ri-search-line me-3"></i>
        <input type="email" class="border-0 bg-secondary-subtle" placeholder="Cari Ramadhan" />
      </div>
    </form>
    <div class="row mt-3">
      <div class="col-12">
        <div class="d-flex align-items-center border-bottom p-2">
          <h6 class="m-0 me-3 text-info">1</h6>
          <span>Doa Menyambut Bulan Ramadhan </span>
          <i class="ri-arrow-right-s-line fs-3 ms-auto"></i>
        </div>
      </div>
      <div class="col-12">
        <div class="d-flex align-items-center border-bottom p-2">
          <h6 class="m-0 me-3 text-info">1</h6>
          <span>Doa Menyambut Bulan Ramadhan </span>
          <i class="ri-arrow-right-s-line fs-3 ms-auto"></i>
        </div>
      </div>
    </div>
  </section>
</template>
