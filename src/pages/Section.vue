<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import SearchBar from "../components/SearchBar.vue";
import MaterialCard from "../components/MaterialCard.vue";
import Footer from "../components/Footer.vue";

const route = useRoute();
const sectionId = route.params.id;

// mock data - in real app this would come from an API
const allMaterials = ref([
  {
    id: "m1",
    title: "أثر التربية على الطفولة",
    type: "كتاب",
    author: "د. ليلى",
    section: "books",
    icon: "📕",
    link: "#",
  },
  {
    id: "m2",
    title: "دليل الأمومة",
    type: "كتيب",
    author: "مركز",
    section: "guides",
    icon: "📗",
    link: "#",
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
    link: "#",
  },
  {
    id: "m5",
    title: "بحث عن العنف الأسري",
    type: "بحث",
    author: "د. أحمد",
    section: "books",
    icon: "📘",
    link: "#",
  },
]);

const query = ref("");
const materials = computed(() => {
  return allMaterials.value.filter(
    (m) =>
      m.section === sectionId &&
      (!query.value ||
        (m.title + m.author + m.type)
          .toLowerCase()
          .includes(query.value.toLowerCase()))
  );
});

const sections = [
  { id: "books", title: "كتب وأبحاث" },
  { id: "articles", title: "مقالات متخصصة" },
  { id: "guides", title: "كتيبات إرشادية" },
  { id: "media", title: "مواد صوتية ومرئية" },
];
</script>

<template>
  <div class="min-h-screen app-bg">
    <Header :title="'مكتبة رقمية'" />
    <section class="max-w-6xl mx-auto px-4 py-8">
      <div class="grid lg:grid-cols-[240px_1fr] gap-6">
        <Sidebar :sections="sections" />

        <main>
          <div class="mb-6">
            <h2 class="text-2xl font-semibold text-right">{{ sectionId }}</h2>
            <p class="text-gray-500 text-right">
              يمكنك البحث في هذا القسم أو تصفية النتائج.
            </p>
          </div>

          <div class="mb-6">
            <SearchBar v-model="query" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <MaterialCard v-for="m in materials" :key="m.id" :item="m" />
          </div>
        </main>
      </div>

      <Footer />
    </section>
  </div>
</template>
