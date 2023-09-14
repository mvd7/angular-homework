import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PostActions from './post.actions';
import { PostsService } from 'src/app/services/posts.service';
import { switchMap, map } from 'rxjs';
import { Post } from 'src/app/interfaces/post.interface';

@Injectable()
export class PostEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly postService: PostsService
  ) {}

  fetchTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.FETCH_POSTS),
      switchMap(() =>
        this.postService.getPosts().pipe(
          map((data) => {
            console.log(data);

            const posts: Post[] = data.map((postDocument) => {
              return {
                id: postDocument.id,
                author: postDocument.author,
                content: postDocument.content,
                likes: postDocument.likes,
                title: postDocument.title,
                createdAt: postDocument.createdAt,
              };
            });

            return PostActions.fetchPostsSuccess({ posts: posts });
          })
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.DELETE_POST),
      switchMap(({ id }) =>
        this.postService
          .deletePost(id)
          .pipe(map(() => PostActions.deletePostSuccess()))
      )
    )
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.CREATE_POST),
      switchMap(({ author, content, title }) =>
        this.postService
          .createPost(author, content, title)
          .pipe(map(() => PostActions.createTaskSuccess()))
      )
    )
  );

  editTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.EDIT_POST),
      switchMap(({ id, title, content }) =>
        this.postService
          .editPost(id, title, content)
          .pipe(map(() => PostActions.createTaskSuccess()))
      )
    )
  );
}
