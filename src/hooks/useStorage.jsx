import { useState, useEffect } from "react";
import { projectStorage } from "../firbase/config";

const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState('');
	const [url, setUrl] = useState('');

	// the function call inside the useEffect fires every time one of the dependencies from the array changes
	useEffect( () => {
		// references
		const storageRef = projectStorage.ref(file.name);

		storageRef.put(file).on('state_changed', (snap) => {
			let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
			setProgress(percentage); 
		}, (err) => {
			setError(err);
		}, async () => {
			const url = await storageRef.getDownloadURL();
			setUrl(url);
		});
	}, [file]);

	return { progress, error, url };
}

export default useStorage;