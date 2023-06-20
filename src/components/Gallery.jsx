import { useState } from "react";
import ImageGrid from "./ImageGrid";
import Title from "./Title";
import UploadForm from "./UploadForm";
import Modal from "./Modal";

const Gallery = () => {
	const [selectedImg, setSelectedImg] = useState(null);

	return (
		<div className="mx-auto max-w-[960px]">
			<Title />
			<UploadForm />
			<ImageGrid selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
			{ selectedImg &&  <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
		</div>
	)
}

export default Gallery;