import { useState } from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import HomeHeader from "./HomeHeader";

const Gallery = () => {
	const [selectedImg, setSelectedImg] = useState(null);

	return (
		<>
			<HomeHeader />
			<div className="mx-auto max-w-[960px]">
				<ImageGrid selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
				{ selectedImg &&  <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
			</div>
		</>
	)
}

export default Gallery;