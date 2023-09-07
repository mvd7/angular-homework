import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const firebaseConfig = {
  apiKey: 'AIzaSyA_2euO5yGakFoP4jrrvNGZxIXJIkQJ84I',
  authDomain: 'posts-app-6c045.firebaseapp.com',
  projectId: 'posts-app-6c045',
  storageBucket: 'posts-app-6c045.appspot.com',
  messagingSenderId: '394280910396',
  appId: '1:394280910396:web:de61fd0776f7ec06960d39',
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ListPostsComponent,
    CreatePostComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
