<script setup>
import { RouterView } from "vue-router";
import { useUIStore } from "./stores/ui";
import { onMounted } from "vue";

const ui = useUIStore();
onMounted(() => {
  document.documentElement.classList.toggle("dark", ui.dark);
});
</script>

<template>
  <div id="app" class="min-h-screen bg-slate-50 text-slate-900">
    <transition name="fade" mode="out-in">
      <RouterView />
    </transition>

    <!-- Global Drawer (appears on mobile when header toggles) -->
    <transition name="fade">
      <div v-if="ui.drawerOpen" class="fixed inset-0 z-50 flex">
        <div
          @click="ui.closeDrawer()"
          class="absolute inset-0 bg-black/40 backdrop-blur-sm"
        ></div>
        <div
          class="relative ml-auto w-72 bg-white dark:bg-slate-800 p-4 shadow-2xl"
        >
          <button @click="ui.closeDrawer()" class="mb-4 p-2 rounded-md">
            إغلاق
          </button>
          <!-- Optionally render quick links here or include Sidebar via component -->
          <slot name="drawer" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
