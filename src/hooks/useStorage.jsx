import { useState, useEffect } from "react";
import { projectStorage, projectFireStore } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const useStorage = ({ title, category, file }) => {
	const [error, setError] = useState('');
	const [url, setUrl] = useState('');
	const [progress, setProgress] = useState(null);
	const [dataSaved, setDataSaved] = useState(false)

	// the function call inside the useEffect fires every time one of the dependencies from the array changes
	useEffect( () => {
		// references
		const storageRef = ref(projectStorage, file.name);

		const saveData = async(title, category, imageUrl, createdAt) => {
			try {
				await addDoc(collection(projectFireStore, 'images'), {
					title,
					category,
					imageUrl,
					createdAt
				});
			} catch (e) {
				setError(e);
			}
		}

		const uploadTask = uploadBytesResumable(storageRef, file);
		uploadTask.on('state_changed', 
			(snapshot) => {
				let progress = Math.round( (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
				setProgress(progress);
			},
			(error) => {
				setError(error)
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref)
					.then( (downloadUrl) => {
						setUrl(downloadUrl);
						if (url) {
							saveData(title, category, url, serverTimestamp()).then( () => {
								setDataSaved(true)
							})
							.catch( (e) => console.log(e));
						}
					})
					.catch( (error) => setError(error))
			}
		)

	}, [title, category, file, url]);

	return { progress, error, url, dataSaved };
}

export default useStorage;