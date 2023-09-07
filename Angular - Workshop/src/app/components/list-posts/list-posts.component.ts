import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/interfaces/post.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss'],
})
export class ListPostsComponent implements OnInit {
  constructor(
    private readonly postsService: PostsService,
    private readonly router: Router
  ) {}

  posts$: Post[] = [];

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts$ = posts;
      // console.log(posts);
    });
  }

  onClickDelete(id: string) {
    this.postsService.deletePost(id);
  }

  onClickBack() {
    this.router.navigate(['/create-post']);
  }
}
