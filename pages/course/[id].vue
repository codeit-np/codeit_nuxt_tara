<template>
  <div>
    <section class="py-10">
      <div class="container">
        <h1 class="text-3xl font-bold">
          {{ upcomingStore.syllabus.course_name }}
        </h1>
        <div>
          <span class="font-bold">Duration: </span>
          <span>{{ upcomingStore.syllabus.duration }}</span>
        </div>

        <div>
          <span class="font-bold">Category: </span>
          <span>{{ upcomingStore.syllabus.category }}</span>
        </div>

        <div class="py-5">
          <img :src="upcomingStore.syllabus.featured" class="w-1/2" alt="" />
        </div>

        <div>
          <h1 class="text-2xl">Syllabus</h1>
          <div v-html="upcomingStore.syllabus.syllabus"></div>
        </div>

        <div class="py-10">
          {{ data }}
          <form>
            <div class="mb-3">
              <label for="" class="form-label">Select Class Type</label>
              <select class="form-select form-select-lg" v-model="data.type">
                <option selected>Select Class Type</option>
                <option value="physical">Physical</option>
                <option value="online">Online</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                v-model="data.name"
              />
            </div>

            <div class="mb-3">
              <label for="" class="form-label">Address</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                v-model="data.address"
              />
            </div>

            <div class="mb-3">
              <label for="" class="form-label">Contact</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                v-model="data.contact"
              />
            </div>

            <div class="mb-3">
              <label for="" class="form-label">Message</label>
              <textarea
                class="form-control"
                v-model="data.message"
                rows="3"
              ></textarea>
            </div>

            <button
              @click="upcomingStore.store(data)"
              class="bg-blue-500 px-10 py-2 rounded hover:bg-blue-600 text-white"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useUpComingStore } from "~/store/upcoming";
const upcomingStore = useUpComingStore();
const route = useRoute();
await upcomingStore.show(route.params.id);

// Form Post
const data = ref({
  name: "",
  address: "",
  contact: "",
  remarks: "",
  message: "",
  course_id: route.params.id,
  type: "physical",
});
</script>

<style lang="scss" scoped>
</style>