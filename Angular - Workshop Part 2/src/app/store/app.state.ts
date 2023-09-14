import { ActionReducerMap } from '@ngrx/store';
import { PostsState, reducer as PostReducer } from './posts/post.reducer';

export interface AppState {
  posts: PostsState;
}

export const reducers: ActionReducerMap<AppState> = {
  posts: PostReducer,
};
