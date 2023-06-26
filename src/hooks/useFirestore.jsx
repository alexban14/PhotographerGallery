import { useEffect, useState } from "react";
import { projectFireStore } from "../firebase/config";
import { query, collection as fireCollection, onSnapshot, orderBy, limit, where } from "firebase/firestore";

const useFirestore = ({ collection, limitNum, whereInfos }) => {
	const [imageDocs, setImageDocs] = useState([]);

	useEffect( () => {
		let q = '';
		if ( limit && whereInfos ) {
			q = query(fireCollection(projectFireStore, collection), where(whereInfos.key, '==', whereInfos.value), orderBy('createdAt', 'desc'), limit(limitNum));
		} else if (limit) {
			q = query(fireCollection(projectFireStore, collection), orderBy('createdAt', 'desc'), limit(limitNum));
		} else if (whereInfos) {
			q = query(fireCollection(projectFireStore, collection), where(whereInfos.key, '==', whereInfos.value), orderBy('createdAt', 'desc'));
		} else {
			q = query(fireCollection(projectFireStore, collection), orderBy('createdAt', 'desc'));
		}

		console.log(q);

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
	}, [collection, limitNum, whereInfos]);

	return { imageDocs }
}

export default useFirestore;