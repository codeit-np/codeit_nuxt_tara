<template>
  <div>
    <header>
      <!-- Topbar -->
      <Topbar />
      <!-- Main Navbar -->
      <Navbar />
    </header>
    <main>
      <slot></slot>
    </main>
    <footer></footer>
  </div>
</template>

<script setup>
import { useCompanyStore } from "~/store/company";
const companyStore = useCompanyStore();

import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});

await companyStore.index();
</script>

<style >
:root {
  --kPrimary: #1e3547;
  --kSecondary: #fa4f3d;
}

.bg-primary {
  background-color: var(--kPrimary);
}

.bg-secondary {
  background-color: var(--kSecondary);
}
</style>