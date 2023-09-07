import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  constructor(
    private readonly postsService: PostsService,
    private readonly fb: FormBuilder,
    private readonly router: Router
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

    this.postsService.createPost(author, title, content);
    this.postForm.reset();

    this.successMessage = 'Post created successfully!';
  }

  onClickBack() {
    this.router.navigate(['/posts']);
  }
}
