<script setup>
import { ref, onMounted } from "vue";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import SectionCard from "../components/SectionCard.vue";
import Footer from "../components/Footer.vue";

const sections = ref([
  { id: "books", title: "كتب وأبحاث", icon: "📚", count: 24 },
  { id: "articles", title: "مقالات متخصصة", icon: "📰", count: 42 },
  { id: "guides", title: "كتيبات إرشادية", icon: "📘", count: 8 },
  { id: "media", title: "مواد صوتية ومرئية", icon: "🎧", count: 15 },
]);

const topPicks = ref([
  { id: "p1", title: "أهمية الرعاية المبكرة", icon: "📕" },
  { id: "p2", title: "حقوق المرأة في المجتمع", icon: "📗" },
  { id: "p3", title: "تعامل مع الطفل", icon: "🎧" },
]);
const scroller = ref(null);
onMounted(() => {
  if (!scroller.value) return;
});
</script>

<template>
  <div class="min-h-screen app-bg">
    <Header :title="'مكتبة رقمية'" />

    <section class="max-w-6xl mx-auto px-4 py-8">
      <div class="hero rounded-3xl p-8 mb-6 glass">
        <div class="flex flex-col lg:flex-row items-center gap-6">
          <div class="flex-1 text-right">
            <h1 class="text-3xl font-extrabold mb-2">مكتبة المركز الرقمية</h1>
            <p class="text-gray-600">
              مصدر موثوق للكتب والأبحاث والمقالات والمواد المرئية والصوتية حول
              المرأة والطفل.
            </p>
          </div>
          <div class="w-full lg:w-1/3">
            <!-- a large search is already in Header; keep hero visual -->
            <div
              class="h-36 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl flex items-center justify-center"
            >
              مواجهة بصرية
            </div>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold text-right mb-3">الأكثر شهرة</h3>
        <div class="relative">
          <button
            @click="scroller.scrollBy({ left: -240, behavior: 'smooth' })"
            class="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full"
          >
            ‹
          </button>
          <button
            @click="scroller.scrollBy({ left: 240, behavior: 'smooth' })"
            class="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full"
          >
            ›
          </button>
          <div
            ref="scroller"
            class="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
          >
            <div
              v-for="p in topPicks"
              :key="p.id"
              class="min-w-[220px] bg-white rounded-2xl p-4 glass card-hover"
            >
              <div class="text-4xl">{{ p.icon }}</div>
              <div class="mt-2 font-medium">{{ p.title }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-[240px_1fr] gap-6">
        <Sidebar :sections="sections" />

        <main>
          <h2 class="text-2xl font-semibold text-right mb-6">استعرض الأقسام</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectionCard v-for="s in sections" :key="s.id" :section="s" />
          </div>
        </main>
      </div>

      <Footer />
    </section>
  </div>
</template>
