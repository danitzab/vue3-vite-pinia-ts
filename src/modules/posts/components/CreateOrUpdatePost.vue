<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" v-model="text" @keyup.enter="onChange" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  value: { type: String },
});

const emit = defineEmits(['update:modelValue', 'on:change']);

// Variables
const text = ref();

// Functions
function onChange() {
  emit('on:change', text.value);
  text.value = undefined;
}

// Watchers
watch(
  props,
  () => {
    text.value = props.value;
  },
  { immediate: true },
);
</script>
