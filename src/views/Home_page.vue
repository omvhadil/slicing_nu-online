<script setup>
import { homeMenu } from '../constans'
</script>
<template>
  <div class="background position-absolute">
    <img src="../assets/image/pngku.png" alt="" />
  </div>
  <div class="pt-4">
    <div class="container logo text-center pt- bg-white" style="height: 190px">
      <div class="pt-3" style="font-family: 'Aref Ruqaa', serif">
        <h1>آلاَبِمْ</h1>
        <h6>Alabim</h6>
      </div>
    </div>
    <!-- menu -->
    <div class="container bg-white row row-gap-4 m-0 py-3">
      <RouterLink
        to="/wirid_doa"
        v-for="item in homeMenu"
        :key="item.id"
        class="col-3 text-center p-0 cursor nav-link"
      >
        <div
          class="bg-info-subtle mx-auto rounded-circle p-1 overflow-hidden"
          style="width: 40px; height: 40px"
        >
          <img src="../assets/image/quran-icon-png-1.png" alt="" />
        </div>
        <p class="text-smaller mt-1">{{ item.title }}</p>
      </RouterLink>
    </div>
    <!-- banner -->
    <div class="bg-white p-3 my-2">
      <img src="../assets/image/banner.jfif" class="rounded" />
    </div>
    <!-- headeline -->
    <div class="container bg-white py-2">
      <div
        class="d-flex align-content-center justify-content-between border-start border-4 border-info mb-2"
      >
        <h6 class="ms-2">Headeline</h6>
        <i class="ri-arrow-right-s-line"></i>
      </div>
      <div
        v-for="(item, index) in 3"
        :key="index"
        class="d-flex justify-content-between align-items-center border-top border-1 py-2"
      >
        <div>
          <span class="badge text-bg-primary">Ramadhan</span>
          <p>Perilaku yang perlu diperhatikan jelang ramadhan</p>
        </div>
        <div class="ms-2" style="width: 90px; height: 90px">
          <img src="../assets/image/headline.jpg" class="rounded" />
        </div>
      </div>
    </div>
  </div>
</template>
