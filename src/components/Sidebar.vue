<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({ sections: { type: Array, default: () => [] } });
const open = ref(false);
const router = useRouter();
function goto(id) {
  open.value = false;
  router.push({ name: "Section", params: { id } });
}

watch(open, (v) => {
  document.body.style.overflow = v ? "hidden" : "";
});
</script>

<template>
  <aside class="hidden lg:block w-72 p-4">
    <nav class="space-y-3">
      <h3 class="text-sm font-semibold mb-2">الأقسام</h3>
      <ul class="space-y-2">
        <li v-for="s in sections" :key="s.id">
          <button
            @click="goto(s.id)"
            class="w-full text-right px-3 py-2 rounded-xl hover:bg-gray-100 transition flex items-center justify-between"
          >
            <span>{{ s.title }}</span>
            <span class="text-xs text-gray-400">›</span>
          </button>
        </li>
      </ul>
    </nav>
  </aside>

  <!-- Mobile Drawer -->
  <div class="lg:hidden">
    <button @click="open = true" class="m-4 p-2 rounded-lg bg-white/10 shadow">
      قائمة الأقسام
    </button>

    <transition name="fade">
      <div v-if="open" class="fixed inset-0 z-50 flex">
        <div
          @click="open = false"
          class="absolute inset-0 bg-black/40 backdrop-blur-sm"
        ></div>

        <div
          class="relative ml-auto w-72 bg-white dark:bg-slate-800 p-4 shadow-2xl"
        >
          <button @click="open = false" class="mb-4 p-2 rounded-md">
            إغلاق
          </button>
          <ul class="space-y-2">
            <li v-for="s in sections" :key="s.id">
              <button
                @click="goto(s.id)"
                class="w-full text-right px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                {{ s.title }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
