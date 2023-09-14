import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  docData,
  updateDoc,
} from '@angular/fire/firestore';
import { v4 as uuidv4 } from 'uuid';
import { Observable, from } from 'rxjs';
import { Post, RawFirestoreTask } from '../interfaces/post.interface';
import {
  collection,
  addDoc,
  Timestamp,
  deleteDoc,
  doc,
  updateDoc as firestoreUpdateDoc,
  getDoc,
} from 'firebase/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    private readonly firestore: Firestore,
    private readonly router: Router
  ) {}

  getPosts = () => {
    const postsCollection = collection(this.firestore, 'posts');

    const taskCollectionData = collectionData(postsCollection, {
      idField: 'id',
    }) as Observable<RawFirestoreTask[]>;

    return taskCollectionData;
  };

  createPost = (author: string, content: string, title: string) => {
    const postToCreate: Post = {
      id: '',
      author: author,
      content: content,
      createdAt: Timestamp.fromDate(new Date()),
      title: title,
      likes: 0,
    };

    const postsCollection = collection(this.firestore, 'posts');

    return from(addDoc(postsCollection, postToCreate));
  };

  deletePost = (id: string) => {
    const docRef = doc(this.firestore, `posts/${id}`);
    return from(deleteDoc(docRef));
  };

  getPostById(postId: string): Observable<Post | undefined> {
    const docRef = doc(this.firestore, `posts/${postId}`);

    return docData(docRef) as Observable<Post | undefined>;
  }

  editPost = (id: string, updatedContent: string, updatedTitle: string) => {
    if (!id) {
      console.log(`Id ${id} not found.`);
    }

    const docRef = doc(this.firestore, `posts/${id}`);

    const updatedPost: Partial<Post> = {
      content: updatedContent,
      title: updatedTitle,
    };
    // console.log(firestoreUpdateDoc(docRef, updatedPost));
    return from(firestoreUpdateDoc(docRef, updatedPost));
  };
}
