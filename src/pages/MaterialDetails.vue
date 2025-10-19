<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

// In a real app, fetch by id. Here we use hardcoded demo items.
const item = ref({
  id,
  title: "عنوان المادة",
  description: "وصف مختصر للمادة مع معلومات عامة عنها.",
  author: "جهة النشر أو المؤلف",
  type: "كتاب",
  link: "#",
});
</script>

<template>
  <div class="min-h-screen app-bg">
    <div class="max-w-4xl mx-auto px-4 py-12">
      <div class="bg-white shadow-md rounded-2xl p-6 text-right">
        <h1 class="text-2xl font-bold mb-2">{{ item.title }}</h1>
        <p class="text-gray-600 mb-4">{{ item.description }}</p>
        <p class="text-sm text-gray-500">
          المؤلف/الجهة: <span class="font-medium">{{ item.author }}</span>
        </p>
        <p class="text-sm text-gray-500">
          نوع المادة: <span class="font-medium">{{ item.type }}</span>
        </p>

        <div class="mt-6">
          <a
            v-if="item.link"
            :href="item.link"
            class="px-4 py-2 rounded-lg bg-primary text-white"
            >تحميل / مشاهدة</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
