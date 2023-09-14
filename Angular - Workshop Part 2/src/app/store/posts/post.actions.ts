import { createAction, props } from '@ngrx/store';
import { Timestamp } from 'firebase/firestore';
import { Post } from 'src/app/interfaces/post.interface';

export const FETCH_POSTS = '[POST] Fetch POSTS';
export const FETCH_POSTS_SUCCESS = '[POST] Fetch POST Success';

export const CREATE_POST = '[POST] Create POST';
export const CREATE_POST_SUCCESS = '[POST] Create POST Success';

export const DELETE_POST = '[POST] Delete POST';
export const DELETE_POST_SUCCESS = '[POST] Delete POST Sucess';

export const EDIT_POST = '[POST] Edit POST';
export const EDIT_POST_SUCCESS = '[POST] Edit POST Success';

export const fetchPosts = createAction(FETCH_POSTS);
export const fetchPostsSuccess = createAction(
  FETCH_POSTS_SUCCESS,
  props<{ posts: Post[] }>()
);

export const deletePost = createAction(DELETE_POST, props<{ id: string }>());
export const deletePostSuccess = createAction(DELETE_POST_SUCCESS);

export const createPost = createAction(
  CREATE_POST,
  props<{
    id: string;
    author: string;
    title: string;
    content: string;
    likes: number;
    createdAt: Timestamp;
  }>()
);
export const createTaskSuccess = createAction(CREATE_POST_SUCCESS);

export const editPost = createAction(
  EDIT_POST,
  props<{ id: string; title: string; content: string }>()
);

export const editPostSuccess = createAction(
  EDIT_POST_SUCCESS,
  props<{ updatedPost: Post }>()
);
