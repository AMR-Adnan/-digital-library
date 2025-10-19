<script setup>
import { useRouter } from "vue-router";
const props = defineProps({ item: Object });
const router = useRouter();
function view() {
  router.push({ name: "MaterialDetails", params: { id: item.id } });
}
</script>

<template>
  <div class="relative rounded-2xl overflow-hidden card-hover glass">
    <div
      class="relative h-44 bg-gradient-to-br from-white/30 to-white/5 flex items-center justify-center text-6xl"
    >
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"
      ></div>
      <div class="text-6xl z-10">{{ item.icon || "📘" }}</div>
      <button
        @click="view"
        class="absolute right-3 top-3 opacity-0 hover:opacity-100 transition bg-primary text-white p-2 rounded-full"
      >
        🔍
      </button>
    </div>

    <div class="p-4 text-right">
      <h4 class="font-semibold">{{ item.title }}</h4>
      <p class="text-sm text-gray-500">{{ item.type }} • {{ item.author }}</p>
      <div class="mt-3 flex justify-between items-center">
        <div>
          <a v-if="item.link" :href="item.link" class="text-sm text-gray-500"
            >تحميل</a
          >
        </div>
        <button @click="view" class="btn-primary">عرض التفاصيل</button>
      </div>
    </div>
  </div>
</template>
