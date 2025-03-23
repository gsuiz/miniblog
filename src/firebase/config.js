import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCivqeAPl-0sfYVl_15aPA-_DmXNeLVmNA',
  authDomain: 'mini-blog-a2eb6.firebaseapp.com',
  projectId: 'mini-blog-a2eb6',
  storageBucket: 'mini-blog-a2eb6.firebasestorage.app',
  messagingSenderId: '611994814563',
  appId: '1:611994814563:web:8ba82367880d81d73e1056',
  measurementId: 'G-KX7SD4REV9',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db, app }
