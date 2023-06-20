import { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

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
		// style={{ width: progress + '%' }}
		<motion.div className="progress-bar" 
			initial={{ width: 0 }}
			animate={{ width: progress + '%' }}
		></motion.div>
	)
}

export default ProgressBar;