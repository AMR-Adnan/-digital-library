<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUIStore } from "../stores/ui";

const props = defineProps({ title: { type: String, default: "مكتبة رقمية" } });
const query = ref("");
const router = useRouter();
const ui = useUIStore();

function onSearch() {
  if (!query.value) return;
  router.push({ name: "Search", query: { q: query.value } });
}
function openDrawer() {
  ui.toggleDrawer();
}
function toggleDark() {
  ui.toggleDark();
}
</script>

<template>
  <header class="w-full hero sticky top-0 z-40 shadow-md">
    <div class="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
      <div class="flex items-center gap-3">
        <button
          @click="openDrawer"
          class="lg:hidden p-2 rounded-md bg-white/10"
        >
          <!-- hamburger -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-slate-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold"
        >
          م
        </div>
        <div class="hidden sm:block">
          <div class="text-sm font-semibold">مركز دراسات المرأة والطفل</div>
          <div class="text-xs text-slate-600">{{ title }}</div>
        </div>
      </div>

      <div class="flex-1">
        <div class="relative">
          <input
            v-model="query"
            @keyup.enter="onSearch"
            placeholder="ابحث عن كتاب، مقال، أو كتيب..."
            class="w-full rounded-full shadow-lg px-5 py-3 border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white/90"
          />
          <button
            @click="onSearch"
            class="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386-1.414 1.415-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button
          @click="toggleDark"
          class="p-2 rounded-full bg-white/10 hidden sm:inline-flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-slate-700"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 5.47a1 1 0 011.42 0l.7.7a1 1 0 11-1.42 1.42l-.7-.7a1 1 0 010-1.42zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm8 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm5.78-10.53a1 1 0 010 1.42l-.7.7a1 1 0 11-1.42-1.42l.7-.7a1 1 0 011.42 0zM17 9a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"
            />
          </svg>
        </button>

        <button class="hidden sm:inline-flex btn-primary">تسجيل دخول</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.primary {
  background-color: var(--primary);
}
</style>
