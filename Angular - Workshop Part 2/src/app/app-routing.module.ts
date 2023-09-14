import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { AboutComponent } from './components/about/about.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: ListPostsComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'about', component: AboutComponent },
  { path: 'edit-post/:id', component: EditPostComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
