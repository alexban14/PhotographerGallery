import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {

	apiKey: "AIzaSyDf2UZDP6QnQqM-kssYjqxm3AV1NPZhUVs",
  
	authDomain: "grapher-gallery-dev.firebaseapp.com",
  
	projectId: "grapher-gallery-dev",
  
	storageBucket: "grapher-gallery-dev.appspot.com",
  
	messagingSenderId: "171350806486",
  
	appId: "1:171350806486:web:34bec9254775829254de77"
  
};

const firebaseApp = initializeApp(firebaseConfig);

const projectStorage = getStorage(firebaseApp);
const projectFireStore = getFirestore(firebaseApp);

export { projectStorage, projectFireStore };