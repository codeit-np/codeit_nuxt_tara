import axiosApi from "~/config/axios";
import { defineStore } from "pinia";
export const useUpComingStore = defineStore("upcoming", {
  state: () => {
    return {
      upcoming: {},
      syllabus: {},
      message: "",
      loading: false,
    };
  },

  getters: {
    getUpComing: (state) => state.upcoming,
  },

  actions: {
    async index() {
      try {
        this.loading = true;
        var response = await axiosApi.get("upcoming-classes");
        if (response.status == 200) {
          this.upcoming = response.data.data;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },

    async show(id) {
      try {
        this.loading = true;
        var response = await axiosApi.get(`course/${id}`);
        if (response.status == 200) {
          this.syllabus = response.data.data;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },

    async store(data) {
      try {
        this.loading = true;
        var response = await axiosApi.post("enquiry", data);
        if (response.status == 200) {
          console.warn("record saved successfully");
        }
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
  },
});
