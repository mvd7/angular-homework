import { AppState } from '../app.state';

export const selectPosts = (state: AppState) => state.posts.posts;
