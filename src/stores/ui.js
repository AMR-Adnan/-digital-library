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
      document.documentElement.classList.toggle("dark", this.dark);
    },
  },
});
