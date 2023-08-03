import axiosApi from "~/config/axios";
import { defineStore } from "pinia";
export const useCompanyStore = defineStore("company", {
  state: () => {
    return {
      company: {},
      loading: false,
    };
  },

  getters: {
    getCompany: (state) => state.company,
  },

  actions: {
    async index() {
      try {
        this.loading = true;
        var response = await axiosApi.get("setting");
        if (response.status == 200) {
          this.company = response.data.data;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
