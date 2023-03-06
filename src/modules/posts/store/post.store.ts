import { reactive } from 'vue';
import { defineStore } from 'pinia';

// Services
import * as postService from '../services/post.service';

import { Post, CreatePostDTO, UpdatePostDTO } from '../types/post.type';

interface State {
  isLoading: boolean;
  post: Post | undefined;
  posts: Post[];
}

export const usePostStore = defineStore('posts', () => {
  const state = reactive<State>({
    isLoading: false,
    post: undefined,
    posts: [],
  });

  // #region - Actions
  function fetchPosts() {
    try {
      state.isLoading = true;
      state.posts = postService.getAll();
    } catch (e) {
      console.error(e);
    } finally {
      state.isLoading = false;
    }
  }

  function fetchById(id: string) {
    try {
      state.isLoading = true;
      state.post = postService.getById(id);
    } catch (e) {
      console.error(e);
    } finally {
      state.isLoading = false;
    }
  }

  function create(data: CreatePostDTO) {
    try {
      state.isLoading = true;
      const result = postService.create(data);

      // Update store
      state.posts.push(result);
    } catch (e) {
      console.error(e);
    } finally {
      state.isLoading = false;
    }
  }

  function updateById(id: string, data: UpdatePostDTO) {
    try {
      state.isLoading = true;
      const result = postService.updateById(id, data);
      if (!result) {
        return;
      }

      // Update store
      const index = state.posts.findIndex((el) => el.id === id);
      state.posts[index] = result;
    } catch (e) {
      console.error(e);
    } finally {
      state.isLoading = false;
    }
  }

  function removeById(id: string) {
    try {
      state.isLoading = true;
      postService.removeById(id);

      // Update store
      const resultFiltered = state.posts.filter((el) => el.id !== id);
      state.posts = resultFiltered;
    } catch (e) {
      console.error(e);
    } finally {
      state.isLoading = false;
    }
  }
  // #endregion

  return {
    state,
    fetchPosts,
    fetchById,
    create,
    updateById,
    removeById,
  };
});
