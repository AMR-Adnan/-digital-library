<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import MaterialCard from "../components/MaterialCard.vue";

const route = useRoute();
const router = useRouter();
const q = ref(route.query.q || "");

// mock materials (could be replaced by API call)
const all = [
  {
    id: "m1",
    title: "أثر التربية على الطفولة",
    type: "كتاب",
    author: "د. ليلى",
    section: "books",
    icon: "📕",
  },
  {
    id: "m2",
    title: "دليل الأمومة",
    type: "كتيب",
    author: "مركز",
    section: "guides",
    icon: "📗",
  },
  {
    id: "m3",
    title: "مقابلة مع أخصائية",
    type: "مقال",
    author: "سلمى",
    section: "articles",
    icon: "📰",
  },
  {
    id: "m4",
    title: "ندوة حول الصحة النفسية",
    type: "فيديو",
    author: "المركز",
    section: "media",
    icon: "🎥",
  },
];

const results = computed(() => {
  if (!q.value) return [];
  return all.filter((m) =>
    (m.title + m.author + m.type).toLowerCase().includes(q.value.toLowerCase())
  );
});
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h2 class="text-2xl font-semibold text-right">نتائج البحث: "{{ q }}"</h2>
    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <MaterialCard v-for="r in results" :key="r.id" :item="r" />
    </div>
  </div>
</template>
