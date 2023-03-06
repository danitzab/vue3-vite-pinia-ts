export interface Post {
  id: string;
  title: string;
  createAt: Date;
  updateAt: Date;
}

export interface CreatePostDTO extends Omit<Post, 'id' | 'createAt' | 'updateAt'> {};

export interface UpdatePostDTO extends Omit<Post, 'updateAt'> {};

