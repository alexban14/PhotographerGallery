import { useEffect, useState } from "react";
import { projectFireStore } from "../firebase/config";
import { query, collection as fireCollection, onSnapshot, orderBy } from "firebase/firestore";

const useFirestore = (collection) => {
	const [imageDocs, setImageDocs] = useState([]);

	useEffect( () => {
		const q = query(fireCollection(projectFireStore, collection), orderBy('createdAt'));
		const unsub = onSnapshot(q, (querySnapshot) => {
			let imgDocs = []
			querySnapshot.forEach( (doc) => {
				imgDocs.push({
					...doc.data(),
					id: doc.id
				});
				setImageDocs(imgDocs);
			});
		});
	}, [collection]);

	return { imageDocs }
}

export default useFirestore;