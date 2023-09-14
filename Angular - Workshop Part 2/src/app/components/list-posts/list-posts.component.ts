import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/interfaces/post.interface';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { deletePost, fetchPosts } from 'src/app/store/posts/post.actions';
import { selectPosts } from 'src/app/store/posts/post.selector';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss'],
})
export class ListPostsComponent implements OnInit {
  constructor(
    private readonly postsService: PostsService,
    private readonly router: Router,
    private readonly store: Store<AppState>
  ) {}

  posts: Post[] = [];

  ngOnInit(): void {
    this.store.dispatch(fetchPosts());

    this.store.select(selectPosts).subscribe((postsFromStore) => {
      console.log(postsFromStore);
      this.posts = postsFromStore as unknown as Post[];
    });
  }

  onClickDelete(id: string) {
    this.store.dispatch(deletePost({ id: id }));
  }

  onClickBack() {
    this.router.navigate(['/create-post']);
  }

  editPost(id: string) {
    this.router.navigate(['/edit-post', id]);
  }
}
