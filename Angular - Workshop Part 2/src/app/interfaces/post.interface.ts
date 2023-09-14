import { Timestamp } from '@angular/fire/firestore';

export interface Post {
  id: string;
  author: string;
  title: string;
  content: string;
  likes: number;
  createdAt: Timestamp;
}

export interface RawFirestoreTask {
  id: string;
  author: string;
  title: string;
  content: string;
  likes: number;
  createdAt: Timestamp;
}
