<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const navbar = ref(null)

window.onscroll = () => {
  if (window.pageYOffset > 80) {
    navbar.value.classList.add('bg-header', 'shadow-sm')
  } else {
    navbar.value.classList.remove('bg-header', 'shadow-sm')
  }
}
</script>
<template>
  <nav class="navbar position-fixed w-100 z-3" ref="navbar">
    <div class="container">
      <div class="d-flex align-items-center">
        <div @click="router.back()">
          <i class="ri-arrow-left-line fs-3 text-white"></i>
        </div>
        <p class="m-0 ms-3 text-white">Jadwal Sholat</p>
      </div>
      <div class="d-flex align-items-center column-gap-4">
        <button class="btn p-0 text-white">
          <i class="ri-share-line fs-3"></i>
        </button>
        <button class="btn p-0 text-white">
          <i class="ri-error-warning-line fs-3"></i>
        </button>
        <button class="btn p-0 text-white">
          <i class="ri-settings-4-line fs-3"></i>
        </button>
      </div>
    </div>
  </nav>
  <section
    class="d-flex align-items-center justify-content-center position-relative"
    style="height: 300px"
  >
    <img
      src="../assets/image/bg-jadwal-sholat.jpg"
      class="position-absolute z-1"
      style="height: 100%"
    />
    <div class="text-center text-white position-absolute z-2">
      <p class="text-smaller">
        <i class="ri-map-pin-2-fill text-danger me-2"></i>Kota Proboliggo Kec Kraksaan
      </p>
      <h2>Imsak 04:00 WIT</h2>
    </div>
  </section>
  <section class="container pb-5 position-absolute z-2" style="margin-top: -4rem">
    <div class="d-flex justify-content-between">
      <span class="text-smaller text-white d-flex align-items-center"
        ><i class="ri-refresh-line me-1"></i>Update</span
      >
      <span class="text-smaller text-white d-flex align-items-center"
        ><i class="ri-compass-3-line me-1"></i>Arah Kiblat</span
      >
    </div>
    <div
      class="shadow-sm bg-white p-3 rounded-3 mt-3 d-flex align-items-center justify-content-between"
    >
      <button class="btn p-0">
        <i class="ri-arrow-left-s-line fs-2 text-info"></i>
      </button>
      <div class="text-center">
        <h6 class="m-0 text-small">26 Maret 2023</h6>
        <span class="text-smaller">4 Ramadhan 1444</span>
      </div>
      <button class="btn p-0">
        <i class="ri-arrow-right-s-line fs-2 text-info"></i>
      </button>
    </div>
    <div class="d-flex justify-content-between mt-4 px-3 py-1">
      <span class="d-flex align-items-center"><i class="ri-moon-cloudy-line me-2"></i>Imsak</span>
      <span class="d-flex align-items-center">04:10<i class="ri-alarm-line ms-2"></i></span>
    </div>
    <div class="d-flex justify-content-between mt-4 px-3 py-1">
      <span class="d-flex align-items-center"><i class="ri-sun-cloudy-line me-2"></i>Subuh</span>
      <span class="d-flex align-items-center">04:41<i class="ri-alarm-line ms-2"></i></span>
    </div>
    <div class="d-flex justify-content-between mt-4 px-3 py-1">
      <span class="d-flex align-items-center"><i class="ri-haze-line me-2"></i>Terbit</span>
      <span class="d-flex align-items-center">05:56<i class="ri-alarm-line ms-2"></i></span>
    </div>
    <div class="d-flex justify-content-between mt-4 px-3 py-1">
      <span class="d-flex align-items-center"><i class="ri-sun-foggy-line me-2"></i>Dhuha</span>
      <span class="d-flex align-items-center">06:18<i class="ri-alarm-line ms-2"></i></span>
    </div>
    <div class="d-flex justify-content-between mt-4 px-3 py-1">
      <span class="d-flex align-items-center"><i class="ri-sun-line me-2"></i>Dzuhur</span>
      <span class="d-flex align-items-center">12:01<i class="ri-alarm-line ms-2"></i></span>
    </div>
    <div class="d-flex justify-content-between mt-4 px-3 py-1">
      <span class="d-flex align-items-center"><i class="ri-moon-cloudy-line me-2"></i>Asar</span>
      <span class="d-flex align-items-center">04:10<i class="ri-alarm-line ms-2"></i></span>
    </div>
    <div class="d-flex justify-content-between mt-4 px-3 py-1">
      <span class="d-flex align-items-center"><i class="ri-moon-cloudy-line me-2"></i>Maghrib</span>
      <span class="d-flex align-items-center">04:10<i class="ri-alarm-line ms-2"></i></span>
    </div>
    <div class="d-flex justify-content-between mt-4 px-3 py-1">
      <span class="d-flex align-items-center"><i class="ri-moon-cloudy-line me-2"></i>Isya</span>
      <span class="d-flex align-items-center">04:10<i class="ri-alarm-line ms-2"></i></span>
    </div>
  </section>
</template>
