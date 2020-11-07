import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import initFirebase from '../../utils/auth/initFirebase';

initFirebase();

export let db = firebase.firestore();
