import { useEffect } from "react";
import useStorage from "../hooks/useStorage";

// eslint-disable-next-line react/prop-types
const ProgressBar = ({ title, setTitle, category, setCategory, file, setFile }) => {
	const { progress, url } = useStorage({title, category, file});
	
	useEffect( () => {
		if (url) {
			setTitle('');
			setCategory('');
			setFile(null);
		}
	}, [url, setTitle, setCategory, setFile]);

	return (
		<div className="progress-bar" style={{ width: progress + '%' }}></div>
	)
}

export default ProgressBar;