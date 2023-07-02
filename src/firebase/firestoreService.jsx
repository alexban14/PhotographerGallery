import { projectFireStore } from "./config"
import { query, collection as fireCollection, onSnapshot, orderBy, limit, where } from "firebase/firestore";

const fetchImagesData = async({ collection, limitNum, whereInfos }) => {
	return new Promise((resolve, reject) => {
		let q = '';
		if ( limit && whereInfos ) {
			q = query(
				fireCollection(projectFireStore, collection),
				where(whereInfos.key, '==', whereInfos.value),
				orderBy('createdAt', 'desc'), limit(limitNum)
			);
		} else if (limitNum) {
			q = query(
				fireCollection(projectFireStore, collection),
				orderBy('createdAt', 'desc'),
				limit(limitNum)
			);
		} else if (whereInfos) {
			q = query(
				fireCollection(projectFireStore, collection),
				where(whereInfos.key, '==', whereInfos.value),
				orderBy('createdAt', 'desc')
			);
		} else {
			q = query(
				fireCollection(projectFireStore, collection),
				orderBy('createdAt', 'desc')
			);
		}

		console.log(q);

		const unSub = onSnapshot(q, (querySnapshot) => {
			let imgDocs = []
			querySnapshot.forEach( (doc) => {
				imgDocs.push({
					...doc.data(),
					id: doc.id
				});
			});
			resolve(imgDocs);
		}, (error) => {
			reject(error)
		});

		return unSub();
	});
}

export default fetchImagesData;