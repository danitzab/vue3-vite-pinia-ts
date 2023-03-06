<template>
  <div class="container">
    <h1>Posts</h1>
    <CreateOrUpdatePost :value="selected?.title" @on:change="onChange" />
    <div class="row mt-3" v-for="(post, index) in posts" :key="index">
      <div class="col-sm-6 col-md-8">{{ post.title }}</div>
      <div class="col-6 col-md-4 text-end">
        <button class="btn btn-primary mx-2" @click="selected = post">Edit</button>
        <button class="btn btn-danger" @click="removeById(post.id)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Components
import CreateOrUpdatePost from '../components/CreateOrUpdatePost.vue';

// Composables
import { usePost } from '../composables/usePost';
import { Post } from '../types/post.type';

// Variables
const { isLoading, posts, fetchPosts, create, updateById, removeById } = usePost();
const selected = ref<Post>();

// LifeCycles
onMounted(() => {
  fetchPosts();
});

// Functions
function onChange(title: string) {
  if (selected.value) {
    selected.value.title = title;
    updateById(selected.value.id, selected.value);
    selected.value = undefined;
  } else {
    create({
      title,
    });
  }
}
</script>
