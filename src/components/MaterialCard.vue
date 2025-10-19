<script setup>
import { useRouter } from "vue-router";
const props = defineProps({ item: Object });
const router = useRouter();
function view() {
  router.push({ name: "MaterialDetails", params: { id: item.id } });
}
</script>

<template>
  <div
    class="relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
  >
    <div
      class="relative h-40 flex items-center justify-center text-5xl bg-gradient-to-br from-primary/10 to-accent/10"
    >
      <div class="z-10">{{ item.icon || "📘" }}</div>
      <div
        class="absolute inset-0 opacity-0 hover:opacity-100 transition bg-black/5"
      ></div>
    </div>

    <div class="p-4 text-right">
      <h4 class="font-semibold text-xl">{{ item.title }}</h4>
      <p class="text-sm text-gray-500">{{ item.type }} • {{ item.author }}</p>
      <div class="mt-3 flex justify-between items-center">
        <div>
          <a v-if="item.link" :href="item.link" class="text-sm text-primary"
            >تحميل</a
          >
        </div>
        <button
          @click="view"
          class="btn-flat border border-primary/10 text-primary"
        >
          عرض التفاصيل
        </button>
      </div>
    </div>
  </div>
</template>
