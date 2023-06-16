import { useEffect } from "react";
import useStorage from "../hooks/useStorage";

// eslint-disable-next-line react/prop-types
const ProgressBar = ({ title, setTitle, category, setCategory, file, setFile }) => {
	const { progress, dataSaved } = useStorage({title, category, file});
	
	useEffect( () => {
		if (dataSaved) {
			setTitle('');
			setCategory('');
			setFile(null);
		}
	}, [dataSaved, setTitle, setCategory, setFile]);

	return (
		<div className="progress-bar" style={{ width: progress + '%' }}></div>
	)
}

export default ProgressBar;