import { Injectable } from '@angular/core';
import { Firestore, collectionData, updateDoc } from '@angular/fire/firestore';
import { v4 as uuidv4 } from 'uuid';
import { Observable, from } from 'rxjs';
import { Post, RawFirestoreTask } from '../interfaces/post.interface';
import {
  collection,
  addDoc,
  Timestamp,
  deleteDoc,
  doc,
} from 'firebase/firestore';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private readonly firestore: Firestore) {}

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

    // console.log(postToCreate);

    const postsCollection = collection(this.firestore, 'posts');

    return from(addDoc(postsCollection, postToCreate));
  };

  deletePost = (id: string) => {
    const docRef = doc(this.firestore, `posts/${id}`);
    return from(deleteDoc(docRef));
  };
}
