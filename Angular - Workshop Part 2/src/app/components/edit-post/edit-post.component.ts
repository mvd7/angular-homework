import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { editPost } from 'src/app/store/posts/post.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  editPostForm: FormGroup;
  postId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private readonly postService: PostsService,
    private readonly router: Router
  ) {
    this.editPostForm = this.fb.group({
      title: [''],
      content: [''],
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.postId = params.get('id');
      console.log(this.postId);
      if (this.postId) {
        this.postService.getPostById(this.postId).subscribe((post) => {
          if (post) {
            this.editPostForm.patchValue({
              title: post.title,
              content: post.content,
            });
          } else {
            // ADD NOT FOUND ROUTE.
            console.log(`No post with id ${this.postId}`);
          }
        });
      }
    });
  }

  onSubmit = () => {
    const id = this.postId;
    if (id !== null) {
      const { title, content } = this.editPostForm.value;
      this.store.dispatch(editPost({ id, title, content }));
      this.router.navigate(['posts']);
    } else {
      console.log('postId is null, cannot submit the form');
    }
  };
}
