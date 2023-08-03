<template>
  <div>
    <!-- Top Navbar -->
    <section class="bg-primary text-white py-2">
      <div class="container flex justify-between">
        <div>
          <span
            ><i class="fa-solid fa-mobile-screen-button"></i>
            {{ companyStore.company.phone }},
            {{ companyStore.company.contact }}</span
          >
          <span class="ms-5">
            <i class="fa-solid fa-envelope"></i>
            {{ companyStore.company.email }}
          </span>
        </div>
        <div class="flex gap-2">
          <a target="_blank" :href="companyStore.company.facebook"
            ><span><i class="fa-brands fa-square-facebook"></i></span
          ></a>
          <a target="_blank" :href="companyStore.company.twitter">
            <span><i class="fa-brands fa-square-twitter"></i></span
          ></a>
          <a target="_blank" :href="companyStore.company.linkedin">
            <span><i class="fa-brands fa-linkedin"></i></span
          ></a>
          <a target="_blank" :href="companyStore.company.youtube">
            <span><i class="fa-brands fa-youtube"></i></span
          ></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCompanyStore } from "~/store/company";
const companyStore = useCompanyStore();
</script>

<style lang="scss" scoped>
</style>