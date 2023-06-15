import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {

	apiKey: "AIzaSyDf2UZDP6QnQqM-kssYjqxm3AV1NPZhUVs",
  
	authDomain: "grapher-gallery-dev.firebaseapp.com",
  
	projectId: "grapher-gallery-dev",
  
	storageBucket: "grapher-gallery-dev.appspot.com",
  
	messagingSenderId: "171350806486",
  
	appId: "1:171350806486:web:34bec9254775829254de77"
  
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

export { projectStorage, projectFireStore };