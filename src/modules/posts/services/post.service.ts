// Helpers
import { generateId } from '@/modules/common/helpers/uuid.helper';

// Types
import { Post, CreatePostDTO, UpdatePostDTO } from '../types/post.type';

const KEY = 'db_posts';

export const getAll = (): Post[] => {
  return JSON.parse(localStorage.getItem(KEY) || '[]');
};

export const getById = (id: string): Post | undefined => {
  const results = getAll();
  return results.find((el) => el.id === id);
};

export const create = (data: CreatePostDTO): Post => {
  const results = getAll();
  const newItem: Post = {
    ...data,
    id: generateId(),
    createAt: new Date(),
  };
  results.push(newItem);
  localStorage.setItem(KEY, JSON.stringify(results));
  return newItem;
};

export const updateById = (id: string, data: UpdatePostDTO): Post | undefined => {
  const results = getAll();
  const index = results.findIndex((el) => el.id === id);
  if (index === -1) {
    console.error(`Post ${id} not found`);
    return;
  }

  const itemUpdated = {
    ...data,
    updateAt: new Date(),
  };
  results[index] = itemUpdated;
  return itemUpdated;
};

export const removeById = (id: string): void => {
  const results = getAll();

  const resultFiltered = results.filter((el) => el.id !== id);
  localStorage.setItem(KEY, JSON.stringify(resultFiltered));
};

export default {};
