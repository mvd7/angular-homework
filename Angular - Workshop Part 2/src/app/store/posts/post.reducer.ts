import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post.interface';
import * as PostActions from './post.actions';

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [],
};

export const reducer = createReducer(
  initialState,
  on(PostActions.fetchPostsSuccess, (state, payload) => {
    return {
      ...state,
      posts: payload.posts,
    };
  })
);
