import { defineStore } from "pinia";

export const useUIStore = defineStore("ui", {
  state: () => ({
    drawerOpen: false,
    dark: false,
  }),
  actions: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
    closeDrawer() {
      this.drawerOpen = false;
    },
    toggleDark() {
      this.dark = !this.dark;
      try {
        localStorage.setItem("ui:dark", this.dark ? "1" : "0");
      } catch (e) {}
      document.documentElement.classList.toggle("dark", this.dark);
    },
    init() {
      try {
        const v = localStorage.getItem("ui:dark");
        this.dark = v === "1";
      } catch (e) {
        this.dark = false;
      }
      document.documentElement.classList.toggle("dark", this.dark);
    },
  },
});
