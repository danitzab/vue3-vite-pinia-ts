// Store
import { computed } from 'vue';
import { usePostStore } from '../store/post.store';

// Types
import { CreatePostDTO, Post, UpdatePostDTO } from '../types/post.type';

export const usePost = () => {
  const postStore = usePostStore();

  const isLoading = computed<boolean>(() => postStore.state.isLoading);
  const post = computed<Post | undefined>(() => postStore.state.post);
  const posts = computed<Post[]>(() => postStore.state.posts);

  // #region - Functions
  function fetchPosts() {
    return postStore.fetchPosts();
  }

  function fetchById(id: string) {
    return postStore.fetchById(id);
  }

  function create(data: CreatePostDTO) {
    return postStore.create(data);
  }

  function updateById(id: string, data: UpdatePostDTO) {
    return postStore.updateById(id, data);
  }

  function removeById(id: string) {
    return postStore.removeById(id);
  }
  // #endregion

  return {
    isLoading,
    post,
    posts,

    // Functions
    fetchPosts,
    fetchById,
    create,
    updateById,
    removeById,
  };
};
