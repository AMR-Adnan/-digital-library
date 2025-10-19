<script setup>
import { ref, watch } from "vue";
const props = defineProps({ modelValue: String });
const emit = defineEmits(["update:modelValue"]);
const q = ref(props.modelValue || "");
watch(q, (v) => emit("update:modelValue", v));
</script>

<template>
  <div>
    <input
      v-model="q"
      placeholder="تصفية في هذا القسم..."
      class="w-full rounded-2xl shadow px-4 py-2 border border-transparent focus:outline-none"
    />
  </div>
</template>
