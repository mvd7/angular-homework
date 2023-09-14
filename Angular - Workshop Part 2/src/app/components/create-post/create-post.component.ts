import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { createPost } from 'src/app/store/posts/post.actions';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  constructor(
    private readonly postsService: PostsService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly store: Store<AppState>
  ) {}

  successMessage: string = '';

  postForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.postForm = this.fb.group({
      author: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onClickPost() {
    const { title, author, content } = this.postForm.value;

    this.store.dispatch(
      createPost({
        title: title,
        author: author,
        content: content,
        id: '',
        likes: 0,
        createdAt: Timestamp.fromDate(new Date()),
      })
    );

    this.postForm.reset();

    this.successMessage = 'Post created successfully!';
  }

  onClickBack() {
    this.router.navigate(['/posts']);
  }
}
