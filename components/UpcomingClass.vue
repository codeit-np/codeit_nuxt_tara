<template>
  <div class="py-10">
    <div class="container text-center pb-10">
      <h1
        class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Upcoming Classes
      </h1>
      <p>Join us now</p>
    </div>
    <div class="container grid grid-cols-3 gap-5">
      <div v-for="(course, index) in upcomingStore.upcoming" :key="index">
        <Course :course="course" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUpComingStore } from "~/store/upcoming";
const upcomingStore = useUpComingStore();
await upcomingStore.index();
</script>

<style lang="scss" scoped>
</style>