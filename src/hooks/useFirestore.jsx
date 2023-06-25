import { useEffect, useState } from "react";
import { projectFireStore } from "../firebase/config";
import { query, collection as fireCollection, onSnapshot, orderBy, limit } from "firebase/firestore";

const useFirestore = ({ collection, limitNum }) => {
	const [imageDocs, setImageDocs] = useState([]);

	useEffect( () => {
		let q = '';
		if (limit) {
			q = query(fireCollection(projectFireStore, collection), orderBy('createdAt', 'desc'), limit(limitNum));
		} else {
			q = query(fireCollection(projectFireStore, collection), orderBy('createdAt', 'desc'));
		}

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

		return () => unsub();
	}, [collection, limitNum]);

	return { imageDocs }
}

export default useFirestore;