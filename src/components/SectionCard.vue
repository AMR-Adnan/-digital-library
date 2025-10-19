<script setup>
import { useRouter } from "vue-router";
const props = defineProps({ section: Object });
const router = useRouter();
function go() {
  router.push({ name: "Section", params: { id: props.section.id } });
}
</script>

<template>
  <div
    v-observe
    class="min-w-0 card-hover p-4 rounded-2xl glass cursor-pointer"
    @click="go"
  >
    <div
      class="h-36 bg-gray-100 rounded-lg flex items-center justify-center text-3xl text-gray-400"
    >
      {{ section.icon || "📚" }}
    </div>
    <div class="mt-4 text-right">
      <h4 class="font-semibold">{{ section.title }}</h4>
      <p class="text-sm text-gray-500">{{ section.count }} مواد</p>
      <div class="mt-3 text-left">
        <button class="btn-primary">ادخل</button>
      </div>
    </div>
  </div>
</template>
