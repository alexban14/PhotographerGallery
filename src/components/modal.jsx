import React from "react";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Modal = ({ selectedImg, setSelectedImg }) => {

	const handleBackdropClick = (e) => {
		if (e.target.classList.contains('backdrop')) {
			setSelectedImg(null);
		}
	}

	return (
		<motion.div className="backdrop"
			onClick={handleBackdropClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<motion.img src={selectedImg.imageUrl} alt={selectedImg.title} 
				initial={{ y: "-100vh"}}
				animate={{ y: 0 }}
			/>
		</motion.div>
	)
}

export default Modal;