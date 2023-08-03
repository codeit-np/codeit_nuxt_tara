import axiosApi from "~/config/axios";
import { defineStore } from "pinia";
export const useCarouselStore = defineStore("carousel", {
  state: () => {
    return {
      carousel: {},
      loading: false,
    };
  },

  getters: {
    getcarousel: (state) => state.carousel,
  },

  actions: {
    async index() {
      try {
        this.loading = true;
        var response = await axiosApi.get("carousel");
        if (response.status == 200) {
          this.carousel = response.data.data;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
